import { Outlet } from "react-router-dom";
import Header from "./header";
import SideMenu from "./sideMenu";

const LayoutApp = () => {
  return (
    <>
      <Header />
      <SideMenu />
    </>
  );
};

export default LayoutApp;
