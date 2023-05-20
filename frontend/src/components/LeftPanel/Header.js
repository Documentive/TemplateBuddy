import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({ check, handleThemeToggle }) => {
  return (
    <div className="w-full h-16 flex justify-end items-center px-8">
      <ThemeSwitch checked={check} onClick={handleThemeToggle} />
    </div>
  );
};

export default Header;
