import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import CodeDisplayComponent from "./CodeDisplayComponent";

const handleStyle = {};
interface UmlNodeData {
  id: string;
  label: string;
  attributes: { name: string; type: string; visibility: string }[];
  methods: { name: string; type: string; visibility: string }[];
}
let ClickedNodeDisplay = true;
const UmlNode: React.FC<NodeProps<UmlNodeData>> = (props) => {
  const { data } = props;
  const ClickedNode = () => {
    console.log(ClickedNodeDisplay);
    if (ClickedNodeDisplay) {
      ClickedNodeDisplay = false;
      return false;
    } else {
      ClickedNodeDisplay = true;

      return true;
    }
  };
  return (
    <div onClick={ClickedNode}>
      <Handle type="target" position={Position.Top} />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-12 bg-white">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <th className="text-white">{data.label}</th>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.attributes.map(
              (attribute: {
                name: string;
                type: string;
                visibility: string;
              }) => (
                <tr>
                  <td>
                    {attribute.visibility}{" "}
                    <span className="font-bold uppercase text-xs">
                      {attribute.name} :
                    </span>
                    <span className="italic accent-red-300 text-red-600 text-xs">
                      {" "}
                      {attribute.type}{" "}
                    </span>
                  </td>
                </tr>
              ),
            )}
            <tr>
              <hr className="w-full h-0.5 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
              {data.methods.map(
                (method: {
                  name: string;
                  type: string;
                  visibility: string;
                }) => (
                  <tr>
                    <td>
                      {method.visibility}{" "}
                      <span className="font-bold uppercase text-xs">
                        {method.name} :
                      </span>
                      <span className="italic accent-red-300 text-red-600 text-xs">
                        {" "}
                        {method.type}{" "}
                      </span>
                    </td>
                  </tr>
                ),
              )}
            </tr>
          </tbody>
        </table>
      </div>
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
    </div>
  );
};

export default UmlNode;

