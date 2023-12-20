import React , {useState}  from 'react';
import CodeDisplayComponent from "./CodeDisplayComponent";

const TableComponent = () => {
    const [showCode, setShowCode] = useState(false);

    const handleClick = () => {
        setShowCode(!showCode);
    };

    return (
        <div>
            <table onClick={handleClick}>
                test
            </table>

            {showCode && <CodeDisplayComponent />}
        </div>
    )
}
export default TableComponent;