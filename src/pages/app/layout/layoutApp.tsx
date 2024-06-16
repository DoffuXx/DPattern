import { Outlet } from "react-router-dom";
import Header from "./header";
import SideMenu from "./sideMenu";

const Layout = () => {
  return (
    <>
      <Header />
      <SideMenu />
    </>
  );
};

export default Layout;
