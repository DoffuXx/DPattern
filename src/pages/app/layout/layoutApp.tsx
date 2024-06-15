import { Outlet } from "react-router-dom";
import SideMenu from "./sideMenu";

const Layout = () => {
  return (
    <>
      <SideMenu />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
