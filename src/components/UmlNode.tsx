import React from 'react';
import {Handle, NodeProps, Position} from 'reactflow';

const handleStyle = { left: 10 };
interface UmlNodeData {
    label: string;
    attributes: { name: string; type: string; visibility: string; }[];
}
const UmlNode: React.FC<NodeProps<UmlNodeData>> = (props) => {
    const { data } = props;
    return (

        <div>
            <Handle type="target" position={Position.Top}/>




            <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-12 bg-white">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <th>{data.label}</th>
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {data.attributes.map((attribute: { name: string; type: string; visibility: string; }) => (
                        <tr>
                            <td>{attribute.name} :  {attribute.type} : {attribute.visibility}</td>
                                                </tr>
                    ))}

                    </tbody>
                </table>
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                style={handleStyle}
            />
        </div>
    );
};

export default UmlNode;