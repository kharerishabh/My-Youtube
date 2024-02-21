import React from "react";
import {
  HAM_BUR,
  USER_ICON,
  YOUTUBE_SEARCH_API,
  YT_LOGO,
} from "../utilis/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { cacheResult } from "../store/searchSlice";
const Header = () => {
  const disptach = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchResults = useSelector((store) => store.search);

  useEffect(() => {
    //API call if not present
    const timer = setTimeout(() => {
      if(searchResults[searchQuery]) {
        setSuggestion(searchResults[searchQuery])
      }else{
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    //make an api call after ever key press
    //but if the difference between 2 api call is < 200ms
    //decline the API call
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestion(json[1]);
      disptach(cacheResult({[searchQuery]: json[1]}))
    } catch (err) {
      console.log(err.message);
    }
  };

  const toggleMenuHandler = () => {
    disptach(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hambuger"
          src={HAM_BUR}
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img className="h-10 mx-2" alt="yt_logo" src={YT_LOGO} />
        </a>
      </div>
      <div className="col-span-10 px-14">
        <div>
          <input
            className="px-5 w-1/2 p-2 border border-gray-400 rounded-l-full"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-500 rounded-r-full px-5 py-2 bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="px-2 py-2 fixed bg-white w-[33rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
