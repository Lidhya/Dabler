import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-off-white">
      <div className="w-1/6 h-full bg-dark-grey">
        <Sidebar />
      </div>
      <div className="w-5/6 flex flex-col ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
