import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = ({handleThemeToggle}) => {
  return (
    <div className="w-full h-16 flex justify-end items-center px-8">
      {/* TODO: Need to complete the toggle theme functionality */}
      {/* <p>Toggle Theme</p> */}
      {/* <div className="flex ml-4">
        <BsFillSunFill />
        <BsFillMoonFill />
      </div> */}
      <button className="bg-red-400 p-3 dark:bg-emerald-700" onClick={handleThemeToggle}>Toggle</button>
    </div>
  );
};

export default Header;
