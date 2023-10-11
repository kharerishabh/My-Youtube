import React from "react";
import { HAM_BUR, USER_ICON, YT_LOGO } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
const Header = () => {
  const disptach = useDispatch();
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
        <input
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-500 rounded-r-full px-5 py-2 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
