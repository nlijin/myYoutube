import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import ButtonsList from "./ButtonsList";

const BodyContainer = () => {
  return (
    <div className="grid grid-flow-col grid-cols-7 bg-green-400">
      <Sidebar />
      <div className="col-span-6">
        <ButtonsList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default BodyContainer;
