import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getThemeByName } from "@/utils/themeUtils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type NodeData = {
  id: string;
  data: {
    label: string | null;
    attributes?:
      | { name: string; type: string; visibility: string }[]
      | undefined;
    methods?: { name: string; type: string; visibility: string }[] | undefined;
  };
  position: { x: number; y: number };
  type?: string;
  isClicked?: boolean;
  code?: string | "No Code Available";
};

interface CodeDisplayComponentProps {
  node: NodeData;
  onClose: () => void;
  language: string;
  showLineNumbers: boolean;
}
const themes = [
  { label: "Dracula", value: "dracula" },
  { label: "A11y Dark", value: "a11y-dark" },
  { label: "Github", value: "github" },
  { label: "Tomorrow", value: "tomorrow" },
];

const CodeDisplayComponent: React.FC<CodeDisplayComponentProps> = ({
  node,
  onClose,
  language,
  showLineNumbers,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState(dracula);

  const handelChangeTheme = async (e: any) => {
    const theme = e.target.value;
    setTheme(getThemeByName(theme));
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {isOpen && (
        <>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="w-3/4">
              <DialogHeader>
                <DialogTitle>{node.data.label}</DialogTitle>
                {/* <DialogDescription> */}
                {/*   Make changes to your profile here. Click save when you're */}
                {/*   done. */}
                {/* </DialogDescription> */}
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <CopyBlock
                  text={node.code || "No Code Available"}
                  language={language}
                  showLineNumbers={showLineNumbers}
                  theme={theme}
                />

                <div>
                  <span>Select Theme:</span>
                  <div>
                    <select
                      value={theme.lineNumberColor}
                      onChange={handelChangeTheme}
                      className="border border-gray-300 rounded-md"
                    >
                      {themes.map((theme) => (
                        <option key={theme.value} value={theme.value}>
                          {theme.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};
export default CodeDisplayComponent;
