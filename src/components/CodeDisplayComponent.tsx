import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { CopyBlock, dracula } from "react-code-blocks";
type NodeData = {
  id: string;
  data: {
    label: string; attributes?: { name: string; type: string; visibility: string }[] | undefined;
    methods?: { name: string; type: string; visibility: string }[] | undefined;
  }
  position: { x: number; y: number };
  type?: string;
  isClicked?: boolean;
};

interface CodeDisplayComponentProps {
  node: NodeData;
  onClose: () => void;
  code: string;
  language: string;
  showLineNumbers: boolean;
}
const themes = [{ label: 'A11y Dark', value: 'a11yDark' },
{ label: 'A11y Light', value: 'a11yLight' },
{ label: 'An Old Hope', value: 'anOldHope' },
{ label: 'Androidstudio', value: 'androidstudio' },
{ label: 'Arta', value: 'arta' },
{ label: 'Atom One Dark', value: 'atomOneDark' },
{ label: 'Atom One Light', value: 'atomOneLight' },
{ label: 'Codepen', value: 'codepen' },
{ label: 'Dracula', value: 'dracula' },
{ label: 'Far', value: 'far' },
{ label: 'Github', value: 'github' },
{ label: 'Googlecode', value: 'googlecode' },
{ label: 'Hopscotch', value: 'hopscotch' },
{ label: 'Hybrid', value: 'hybrid' },
{ label: 'Ir Black', value: 'irBlack' },
{ label: 'Mono Blue', value: 'monoBlue' },
{ label: 'Monokai Sublime', value: 'monokaiSublime' },
{ label: 'Monokai', value: 'monokai' },
{ label: 'Nord', value: 'nord' },
{ label: 'Obsidian', value: 'obsidian' },
{ label: 'Noctis Viola', value: 'noctisViola' },
{ label: 'Ocean', value: 'ocean' },
{ label: 'Paraiso Dark', value: 'paraisoDark' },
{ label: 'Paraiso Light', value: 'paraisoLight' },
{ label: 'Pojoaque', value: 'pojoaque' },
{ label: 'Purebasic', value: 'purebasic' },
{ label: 'Railscast', value: 'railscast' },
{ label: 'Rainbow', value: 'rainbow' },
{ label: 'Shades Of Purple', value: 'shadesOfPurple' },
{ label: 'Solarized Dark', value: 'solarizedDark' },
{ label: 'Solarized Light', value: 'solarizedLight' },
{ label: 'Sunburst', value: 'sunburst' },
{ label: 'Tomorrow Night Blue', value: 'tomorrowNightBlue' },
{ label: 'Tomorrow Night Bright', value: 'tomorrowNightBright' },
{ label: 'Tomorrow Night Eighties', value: 'tomorrowNightEighties' },
{ label: 'Tomorrow Night', value: 'tomorrowNight' },
{ label: 'Tomorrow', value: 'tomorrow' },
{ label: 'Vs2015', value: 'vs2015' },
{ label: 'Xt256', value: 'xt256' },
{ label: 'Zenburn', value: 'zenburn' },
];

const CodeDisplayComponent: React.FC<CodeDisplayComponentProps> = ({ node, onClose, code, language, showLineNumbers }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState(dracula);

  const handelChangeTheme = async (e: any) => {
    const theme = e.target.value;
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
                  className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => {
                    console.log('modal closed ');
                    setIsOpen(false);
                  }}
                >
                  close modal
                </button>


              </div>
              <CopyBlock
                text={code} language={language} showLineNumbers={showLineNumbers}
                theme={theme}
              />
              <div>


                <span>Select Theme:</span>
                <div>
                  <select value={theme.lineNumberColor} onChange={handelChangeTheme}>
                    {themes.map((theme) => (
                      <option key={theme.value} value={theme.value} > {theme.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </Popup>
        </>


      )
      }

    </div >
  );

};
export default CodeDisplayComponent;
