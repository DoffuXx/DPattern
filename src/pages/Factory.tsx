import React, {useCallback} from 'react';
import ReactFlow, {
    addEdge,
    Background,
    BackgroundVariant, Connection,
    Controls,
    Edge,
    MiniMap,
    useEdgesState,
    useNodesState
} from "reactflow";
import UmlNode  from "../components/UmlNode";
import 'reactflow/dist/style.css';
const UmlTables = [ {title: 'Circle', attributes: [{name: 'radius', type: 'int', visibility: 'private'}]}];
const nodeTypes = {
    uml: UmlNode,
};
const initialNodes = [
    {
        id: '1',
        data: {label: 'Circle'},
        position: { x: 400, y: 300 },
    },
    {
        id: '2',
        data: {label: 'Square'},
        position: { x: 800, y: 300 },
    },
    {
        id: '3',
        data: {label: 'Rectangle'},
        position: { x: 600, y: 300 },
    },
    {
        id: '4',
        data: {label: 'Shape'},
        position: { x: 600, y: 100 },
        type: 'input',
    },
    {
        id: '5',
        data: {
            label: 'Shapetest',
            attributes: [{name: 'name', type: 'String', visibility: 'public'}] // add attributes field
        },
         position: {x: 600, y: 500},
        type: 'uml',
    }
];
const initialEdges = [

    {
        id: 'e4-1',
        source: '4',
        target: '1',
        label: 'implementes',
        animated: true,
    },
    {
        id: 'e4-2',
        source: '4',
        target: '2',
        label: 'implementes',
        animated: true,
    },
    {
        id: 'e4-3',
        source: '4',
        target: '3',
        label: 'implementes',
        animated: true,
    },
];
const Factory = () => {

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);



    const onConnect = useCallback(
        (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );
    return (
        <div  style={{ height: 600 }} >
            <ReactFlow
                nodes={nodes} edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}

            >
                <Controls />
                <MiniMap />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </div>
    );
};

export default Factory;