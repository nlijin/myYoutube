import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const BodyContainer = () => {
  return (
    <div className="grid grid-flow-col grid-cols-9">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default BodyContainer;
