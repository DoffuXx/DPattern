import React, { useCallback, useEffect, useState } from "react";
import {
  addEdge,
  MarkerType,
  Connection,
  Edge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { toast, Bounce } from "react-toastify";
import {
  CircleCode,
  FactoyPatternDemoCode,
  ractangleCode,
  ShapeCode,
  ShapeFactoryCode,
  SquareCode,
} from "@/constants/FactoryCode";
import { CodeDisplayComponent, UmlNode } from "../components";
import { NodeData } from "@/utils/types";
import FlowDiagram from "../components/reactFlowApplication";

const nodeTypes = {
  uml: UmlNode,
};

const initialNodes: NodeData[] = [
  {
    id: "1",
    data: {
      label: "Circle",
      attributes: [
        { name: "", type: "", visibility: "" },
        { name: "", type: "", visibility: "" },
      ],
      methods: [{ name: "draw()", type: "void", visibility: "+" }],
    },
    code: CircleCode,
    parentNode: "8",
    type: "uml",
    extent: "parent",
    position: { x: 10, y: 250 },
  },
  {
    id: "2",
    data: {
      label: "Square",
      attributes: [
        { name: "", type: "", visibility: "" },
        { name: "", type: "", visibility: "" },
      ],
      methods: [{ name: "draw()", type: "void", visibility: "+" }],
    },
    type: "uml",
    code: SquareCode,
    parentNode: "8",
    extent: "parent",
    position: { x: 450, y: 250 },
  },
  {
    id: "3",
    data: {
      label: "Rectangle",
      attributes: [
        { name: "", type: "", visibility: "" },
        { name: "", type: "", visibility: "" },
      ],
      methods: [{ name: "draw()", type: "void", visibility: "+" }],
    },
    code: ractangleCode,
    parentNode: "8",
    type: "uml",
    extent: "parent",
    position: { x: 230, y: 250 },
  },
  {
    id: "4",
    data: {
      label: "Shape",
      attributes: [
        { name: "", type: "", visibility: "" },
        { name: "", type: "", visibility: "" },
      ],
      methods: [{ name: "draw()", type: "void", visibility: "+" }],
    },
    type: "uml",
    code: ShapeCode,
    parentNode: "8",
    extent: "parent",
    position: { x: 230, y: 50 },
  },
  {
    id: "5",
    data: {
      label: "ShapeFactory",
      attributes: [
        { name: "", type: "", visibility: "" },
        { name: "", type: "", visibility: "" },
      ],
      methods: [{ name: "getShape()", type: "Shape", visibility: "+" }],
    },
    position: { x: 700, y: 500 },
    code: ShapeFactoryCode,
    type: "uml",
  },
  {
    id: "6",
    data: {
      label: "FactoryPattern Demo",
      attributes: [
        { name: "", type: "", visibility: "" },
        { name: "", type: "", visibility: "" },
      ],
      methods: [{ name: "main()", type: "void", visibility: "+" }],
    },
    position: { x: 700, y: 100 },
    code: FactoyPatternDemoCode,
    type: "uml",
  },
  {
    id: "8",
    data: { label: "Factory Pattern" },
    position: { x: 0, y: 0 },
    style: {
      border: "2px solid #000",
      width: 600,
      zIndex: -1,
      height: 450,
    },
  },
];

const initialEdges = [
  {
    id: "e4-1",
    source: "4",
    target: "1",
    label: "implementes",
    animated: true,
  },
  {
    id: "e4-2",
    source: "4",
    target: "2",
    label: "implementes",
    animated: true,
  },
  {
    id: "e4-3",
    source: "4",
    target: "3",
    label: "implementes",
    animated: true,
  },
  {
    id: "e6-5",
    source: "6",
    target: "5",
    label: "uses",
    markerEnd: { type: MarkerType.Arrow, color: "#FFCC00" },
  },
  {
    id: "e8-5",
    source: "8",
    target: "5",
    label: "creates",
    animated: false,
  },
];

const Factory = () => {
  useEffect(() => {
    toast("🚀 Explore the code by clicking on the Title Node. Happy coding!", {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [clickedNode, setClickedNode] = useState<NodeData | null>(null);

  const handleNodeClick = (event: React.MouseEvent, element: NodeData) => {
    if (element.type === "uml") {
      setClickedNode((prev) => (prev?.id === element.id ? null : element));
    }
  };

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <FlowDiagram
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      onNodeClick={handleNodeClick}
      CodeDisplayComponent={CodeDisplayComponent}
      clickedNode={clickedNode}
    />
  );
};

export default Factory;
