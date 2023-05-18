import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { yellow } from "@mui/material/colors";
import { IconButton } from "@mui/material";

const Header = ({ theme, handleThemeToggle }) => {
  return (
    <div className="w-full h-16 flex justify-end items-center px-8">
      {/* TODO: Need to complete the toggle theme functionality */}
      <button onClick={handleThemeToggle}>
        {theme === "dark" ? (
          <IconButton>
            <DarkModeIcon sx={{ color: "white" }} />
          </IconButton>
        ) : (
          <IconButton>
            <LightModeIcon sx={{ color: yellow[800] }} />
          </IconButton>
        )}
      </button>
    </div>
  );
};

export default Header;
