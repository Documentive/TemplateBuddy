import React from "react";
import { IconButton, Tooltip, Fade } from "@mui/material";
// Adding all the necessary sections in an array
import { navLinks } from "../../config/navbarConstants";

const NavBar = () => {
  
  return (
    <div className="border-2 border-black w-20 flex flex-col items-center">
      {/* TODO: Need to prepare a logo and favicon */}
      <div className="w-full h-16 border-2 border-orange-300">Logo</div>
      <div className="h-4/6 my-auto flex flex-col justify-evenly items-center">

        {navLinks.map(({ id, title, ariaLabel, icon }) => (
          <Tooltip
            key={id}
            title={title}
            placement="right"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 800 }}
          >
            <IconButton aria-label={ariaLabel}>{icon}</IconButton>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
