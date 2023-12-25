import React, { useState } from 'react'; 
import Popup from 'reactjs-popup';
import { JsxElement } from 'typescript';


interface CodeDisplayComponentProps { onClose: () => void;
}
const CodeDisplayComponent: React.FC<CodeDisplayComponentProps> = ({ onClose  }) => { 
  const [isOpen,setIsOpen] = useState(true);
      // if(!onClose){
      //   setIsOpen(false);
     // }
  const closeModel = () => {
      setIsOpen(false);
      // onclose();
    }; 
  
return ( 
<div>
     
{isOpen && (
  <>

 <Popup open={true} modal>
    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
    <span> Modal content </span>
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
  </Popup>
  </>


 )}

 </div>
);

};
export default CodeDisplayComponent;
