import { Icon, IconProps } from "@tabler/icons-react";
import React from "react";
import * as z from "zod";

export const NavLinksSchema = z.object({
  title: z.string(),
  icon: z.custom<
    React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
  >((val) => {
    return typeof val === "function";
  }),
  subLinks: z.array(
    z.object({
      title: z.string(),
      path: z.string(),
      icon: z.custom<
        React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
      >((val) => {
        return typeof val === "function";
      }),
      element: z.custom<React.ReactElement>((val) => {
        return React.isValidElement(val);
      }),
    }),
  ),
});

export type NavLinks = z.infer<typeof NavLinksSchema>;
