import React from "react";
import { FaUserAlt } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="border-2 border-black w-20 flex flex-col items-center">
      {/* TODO: Need to prepare a logo and favicon */}
      <div className="w-full h-16 border-2 border-orange-300">Logo</div>
      <div className="h-4/6 my-auto flex flex-col justify-evenly items-center">
        {/* TODO:  Need to provide icons for following
        Basic details, address, social media, work ex, education, awards, publications, certifications, skills, languages, interests, projects, references */}

        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
        <FaUserAlt />
      </div>
    </div>
  );
};

export default NavBar;
