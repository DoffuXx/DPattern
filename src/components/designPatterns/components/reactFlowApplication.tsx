import React from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  NodeTypes,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Connection,
} from "reactflow";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "reactflow/dist/style.css";

interface CodeDisplayProps {
  node: Node;
  onClose: () => void;
  language: string;
  showLineNumbers: boolean;
}

interface FlowDiagramProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: (params: Connection | Edge) => void;
  nodeTypes: NodeTypes;
  onNodeClick: (event: React.MouseEvent, node: Node) => void;
  clickedNode: Node | null;
  CodeDisplayComponent: React.ComponentType<CodeDisplayProps>;
  toastConfig?: {
    message: string;
    autoClose?: number;
  };
}

const FlowDiagram: React.FC<FlowDiagramProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  nodeTypes,
  onNodeClick,
  clickedNode,
  CodeDisplayComponent,
  toastConfig,
}) => {
  return (
    <div className="h-screen w-[calc(85vw-2rem)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>

      {clickedNode && (
        <CodeDisplayComponent
          node={clickedNode}
          onClose={() => onNodeClick({} as React.MouseEvent, clickedNode)}
          language="java"
          showLineNumbers={true}
        />
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={toastConfig?.autoClose || 5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default FlowDiagram;
