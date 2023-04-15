import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full h-16 flex justify-end items-center px-8">
      {/* TODO: Need to complete the toggle theme functionality */}
      <p>Toggle Theme</p>
      <div className="flex ml-4">
        <BsFillSunFill />
        <BsFillMoonFill />
      </div>
    </div>
  );
};

export default Header;
