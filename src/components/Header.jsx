import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-2 items-center">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className=" cursor-pointer h-8"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="hamburger icon"
        />
        <img
          className=" cursor-pointer h-8 mx-4"
          src="https://cdn.worldvectorlogo.com/logos/youtube-2.svg"
          alt="youtube icon"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="w-1/4 border-2 border-gray-200 p-2 my-2 rounded-l-full outline-gray-400 "
        />
        <button className="border-gray-200 hover:border-gray-300 hover:bg-gray-300 border-2 rounded-r-full p-2 my-2 bg-gray-200">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 mx-4"
          src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png"
        />
      </div>
    </div>
  );
};

export default Header;
