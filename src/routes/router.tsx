import { createBrowserRouter } from "react-router-dom";
import navLinks from "@/registry/app/navLinks";
import { NavLinks } from "@/registry/app/schema";
import LandingPage from "@/pages/home/pages/landingPage";
import LayoutApp from "@/pages/app/layout/layoutApp";
import Layout from "@/pages/home/layout/layout";

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
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/patterns/",
    element: <LayoutApp />,
    children: createRoutes(navLinks),
  },
]);

export default router;
