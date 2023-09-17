import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="col-span-8 m-3">
      <div className="flex">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="shadow-lg py-2">
        <h3 className="font-bold">Video Title</h3>
        <h3 className="font-normal font-mono"> Channel Name</h3>
        <p className="font-normal">Video description</p>
      </div>
    </div>
  );
};

export default WatchPage;
