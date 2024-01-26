import React, { useState } from "react";
import Popup from "reactjs-popup";
import { CopyBlock, dracula } from "react-code-blocks";
import { getThemeByName } from "../utils/themeUtils";
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
          <Popup open={true} modal>
            <div className="relative p-4 w-auto bg-white rounded-lg shadow md:p-8 content-center">
              <div className="flex justify-between items-center">
                <span className="font-bold uppercase"> {node.data.label}</span>
                <button
                  className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 mb-4"
                  onClick={() => {
                    console.log("modal closed ");
                    setIsOpen(false);
                  }}
                >
                  close
                </button>
              </div>
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
          </Popup>
        </>
      )}
    </div>
  );
};
export default CodeDisplayComponent;
