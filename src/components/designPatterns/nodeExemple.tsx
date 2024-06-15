import React from "react";
import ReactFlow, {
  Node,
  CoordinateExtent,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
} from "reactflow";

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
  type?: Node["type"];
  isClicked?: boolean;
  parentNode?: string;
  extent?: "parent" | CoordinateExtent;
  style?: any;
  code?: string;
};
const intialNode: NodeData[] = [
  {
    id: "1",
    data: {
      label: "exemple",
      attributes: [
        { name: "name", type: "String", visibility: "+" },
        { name: "name", type: "String", visibility: "+" },
      ], // add attributes field
      methods: [{ name: "name", type: "String", visibility: "+" }],
    },
    position: { x: 900, y: 500 },
    type: "uml",
  },
];

export const nodeExemple = (props: {}) => {
  const nodes = intialNode;
  return (
    <div>
      <ReactFlow nodes={nodes}>
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
