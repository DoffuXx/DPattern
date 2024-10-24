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
    attributes?: { name: string; type: string; visibility: string }[];
    methods?: { name: string; type: string; visibility: string }[];
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

  const handelChangeTheme = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const theme = e.target.value;
    setTheme(getThemeByName(theme));
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="w-11/12 max-w-5xl mx-auto max-h-[90vh] overflow-y-auto sm:w-4/5 lg:w-3/4">
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-xl font-semibold">
                {node.data.label}
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col space-y-4 py-4">
              <div className="relative w-full overflow-hidden rounded-lg border">
                <div className="absolute right-2 top-2 z-10 flex items-center space-x-2">
                  <select
                    value={theme.lineNumberColor}
                    onChange={handelChangeTheme}
                    className="rounded-md border bg-background px-2 py-1 text-sm"
                  >
                    {themes.map((theme) => (
                      <option key={theme.value} value={theme.value}>
                        {theme.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-10">
                  <CopyBlock
                    text={node.code || "No Code Available"}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={theme}
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="sm:justify-between">
              <DialogClose asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CodeDisplayComponent;
