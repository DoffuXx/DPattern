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
  ComputerCode,
  ComputerBuilderCode,
  DirectorCode,
  BuilderDemoCode,
} from "@/constants/BuilderCode";
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
      label: "Computer",
      attributes: [
        { name: "cpu", type: "String", visibility: "-" },
        { name: "ram", type: "String", visibility: "-" },
        { name: "storage", type: "String", visibility: "-" },
      ],
      methods: [
        { name: "setCPU(String)", type: "void", visibility: "+" },
        { name: "setRAM(String)", type: "void", visibility: "+" },
        { name: "setStorage(String)", type: "void", visibility: "+" },
        { name: "toString()", type: "String", visibility: "+" },
      ],
    },
    code: ComputerCode,
    parentNode: "8",
    type: "uml",
    extent: "parent",
    position: { x: 650, y: 300 },
  },
  {
    id: "2",
    data: {
      label: "ComputerBuilder",
      attributes: [{ name: "computer", type: "Computer", visibility: "-" }],
      methods: [
        { name: "setCPU(String)", type: "ComputerBuilder", visibility: "+" },
        { name: "setRAM(String)", type: "ComputerBuilder", visibility: "+" },
        {
          name: "setStorage(String)",
          type: "ComputerBuilder",
          visibility: "+",
        },
        { name: "build()", type: "Computer", visibility: "+" },
      ],
    },
    code: ComputerBuilderCode,
    parentNode: "8",
    type: "uml",
    extent: "parent",
    position: { x: 350, y: 290 },
  },
  {
    id: "3",
    data: {
      label: "Director",
      attributes: [
        { name: "builder", type: "ComputerBuilder", visibility: "-" },
      ],
      methods: [
        { name: "setBuilder(ComputerBuilder)", type: "void", visibility: "+" },
        { name: "constructGamingPC()", type: "Computer", visibility: "+" },
        { name: "constructOfficePC()", type: "Computer", visibility: "+" },
      ],
    },
    code: DirectorCode,
    parentNode: "8",
    type: "uml",
    extent: "parent",
    position: { x: 50, y: 50 },
  },
  {
    id: "4",
    data: {
      label: "BuilderPatternDemo",
      attributes: [],
      methods: [{ name: "main(String[])", type: "void", visibility: "+" }],
    },
    code: BuilderDemoCode,
    position: { x: 400, y: 100 },
    type: "uml",
  },
  {
    id: "8",
    data: {
      label: "Builder Pattern",
      attributes: [],
      methods: [],
    },
    position: { x: 50, y: 0 },
    style: {
      border: "2px solid #000",
      width: 800,
      height: 600,
      zIndex: -1,
      backgroundColor: "rgba(240, 240, 240, 0.5)",
      borderRadius: "8px",
      padding: "20px",
    },
  },
];

const initialEdges = [
  {
    id: "e2-1",
    source: "2",
    target: "1",
    label: "creates >",
    animated: true,
    labelStyle: { fill: "#666", fontWeight: 700 },
    style: { stroke: "#666", strokeWidth: 2 },
  },
  {
    id: "e3-2",
    source: "3",
    target: "2",
    label: "uses >",
    animated: true,
    labelStyle: { fill: "#666", fontWeight: 700 },
    style: { stroke: "#666", strokeWidth: 2 },
  },
  {
    id: "e4-3",
    source: "4",
    target: "3",
    label: "uses >",
    markerEnd: { type: MarkerType.Arrow },
    labelStyle: { fill: "#666", fontWeight: 700 },
    style: { stroke: "#666", strokeWidth: 2 },
  },
  {
    id: "e4-1",
    source: "4",
    target: "1",
    label: "< gets",
    style: { stroke: "#666", strokeWidth: 1, strokeDasharray: "5 5" },
    labelStyle: { fill: "#666" },
  },
  {
    id: "e3-1",
    source: "3",
    target: "1",
    label: "< gets",
    style: { stroke: "#666", strokeWidth: 1, strokeDasharray: "5 5" },
    labelStyle: { fill: "#666" },
  },
];

const Builder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [clickedNode, setClickedNode] = useState<NodeData | null>(null);

  useEffect(() => {
    toast(
      "🚀 Explore the Builder pattern by clicking on the nodes. Happy coding!",
      {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      },
    );
  }, []);

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

export default Builder;
