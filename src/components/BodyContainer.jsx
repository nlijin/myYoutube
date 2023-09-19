import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const BodyContainer = () => {
  return (
    <div className="grid grid-flow-col grid-cols-9">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default BodyContainer;
