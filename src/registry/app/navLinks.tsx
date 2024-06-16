import { NavLinks } from "./schema";
import { IconBuildingFactory2, IconPencilPlus } from "@tabler/icons-react";
import { Factory } from "@/components/designPatterns/Pages";

const navLinks: NavLinks[] = [
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
