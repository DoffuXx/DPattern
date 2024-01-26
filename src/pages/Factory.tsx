import { type } from "os";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Background,
  MarkerType,
  BackgroundVariant,
  Connection,
  CoordinateExtent,
  Controls,
  Edge,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import CodeDisplayComponent from "../components/CodeDisplayComponent";
import UmlNode from "../components/UmlNode";
const nodeTypes = {
  uml: UmlNode,
};

// code
let ShapeCode = `public interface Shape {
void draw();} `;

let ractangleCode = `public class Rectangle implements Shape {
 @Override
 public void draw() {
 System.out.println("Inside Rectangle::draw() method.");
 }
}`;

let SquareCode = `public class Square implements Shape {
 @Override
 public void draw() {
 System.out.println("Inside Square::draw() method.");
 }
}`;

let CircleCode = `public class Circle implements Shape {
 @Override
 public void draw() {
 System.out.println("Inside Circle::draw() method.");
 }
}`;

let ShapeFactoryCode = `public class ShapeFactory {
 //use getShape method to get object of type shape
 public Shape getShape(String shapeType){
 if(shapeType == null){
 return null;
 }
 if(shapeType.equalsIgnoreCase("CIRCLE")){
 return new Circle();
 } else if(shapeType.equalsIgnoreCase("RECTANGLE")){
 return new Rectangle();
 } else if(shapeType.equalsIgnoreCase("SQUARE")){
 return new Square();
 }
 return null;
 }
}`;

let FactoyPatternDemoCode = `public class FactoryPatternDemo {
 public static void main(String[] args) {
 ShapeFactory shapeFactory = new ShapeFactory();
 //get an object of Circle and call its draw method.
 Shape shape1 = shapeFactory.getShape("CIRCLE");
 //call draw method of Circle
 shape1.draw();
 //get an object of Rectangle and call its draw method.
 Shape shape2 = shapeFactory.getShape("RECTANGLE");
 //call draw method of Rectangle
 shape2.draw();
 //get an object of Square and call its draw method.
 Shape shape3 = shapeFactory.getShape("SQUARE");
 //call draw method of circle
 shape3.draw();
 }
}`;

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
const initialNodes: NodeData[] = [
  {
    id: "1",
    data: {
      label: "Circle",
      attributes: [
        { name: "", type: "", visibility: "" },
        { name: "", type: "", visibility: "" },
      ], // add attributes field
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
      ], // add attributes field
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
      ], // add attributes field
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
      ], // add attributes field
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
      ], // add attributes field
      methods: [{ name: "getShape()", type: "Shape", visibility: "+" }],
    },
    position: { x: 1000, y: 300 },
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
      ], // add attributes field
      methods: [{ name: "main()", type: "void", visibility: "+" }],
    },
    position: { x: 1000, y: 100 },
    code: FactoyPatternDemoCode,
    type: "uml",
  },

  {
    id: "7",
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
];
const Factory = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [clickedNode, setClickedNode] = useState<NodeData | null>(null); // Add this line

  const handleNodeClick = (event: React.MouseEvent, element: NodeData) => {
    if (element.type === "uml") {
      setClickedNode((prev) => (prev?.id === element.id ? null : element));
    }
  };
  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return (
    <div style={{ height: 600 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
      {clickedNode && (
        <CodeDisplayComponent
          node={clickedNode}
          onClose={() => setClickedNode(null)}
          language="java"
          showLineNumbers={true}
        />
      )}
    </div>
  );
};

export default Factory;
