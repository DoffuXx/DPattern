import { NavLinks } from "./schema";
import {
  IconBuildingFactory2,
  IconPencilPlus,
  IconStar,
  IconTargetArrow,
} from "@tabler/icons-react";
import { Factory } from "@/components/designPatterns/Pages";
import Introduction from "@/components/designPatterns/Pages/Introduction";

const navLinks: NavLinks[] = [
  {
    title: "Getting Started",
    icon: IconStar,
    subLinks: [
      {
        title: "Introduction",
        path: "introduction",
        icon: IconTargetArrow,
        element: <Introduction />,
      },
    ],
  },
  {
    title: "Creational Patterns",
    icon: IconPencilPlus,
    subLinks: [
      {
        title: "Factory",
        path: "factory",
        icon: IconBuildingFactory2,
        element: <Factory />,
      },
    ],
  },
];

export default navLinks;
