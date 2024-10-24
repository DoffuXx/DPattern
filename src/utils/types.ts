import { CoordinateExtent, Node } from "reactflow";

export type NodeData = {
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
