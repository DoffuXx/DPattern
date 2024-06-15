import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/app/layout/layoutApp";
import navLinks from "@/registry/app/navLinks";
import { NavLinks } from "@/registry/app/schema";

const createRoutes = (navLinks: NavLinks[]): any[] => {
  const routes = [];
  for (const link of navLinks) {
    if (link.subLinks) {
      for (const subLink of link.subLinks) {
        routes.push({
          path: subLink.path,
          element: subLink.element,
        });
      }
    }
  }
  return routes;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: createRoutes(navLinks),
  },
]);

export default router;
