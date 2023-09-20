import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants.js";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        searchResponse();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchResponse = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col shadow-sm p-2 items-center">
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
      <div className="col-span-10 px-10">
        <div className="relative">
          <input
            type="text"
            className="w-3/4 border-2 border-gray-200 py-1 px-2 my-1 rounded-l-full outline-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button className="border-gray-200 hover:border-gray-300 hover:bg-gray-300 border-2 rounded-r-full py-1 px-2 my-1 bg-gray-200">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute">
            <ul className="bg-white px-4 py-2 w-[40rem] rounded-md shadow-lg">
              {searchSuggestions.map((s) => (
                <li key={s} className="px-2 py-1 hover:bg-slate-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
