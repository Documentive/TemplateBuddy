import React from "react";
import { IconButton } from "@mui/material";
import { Person } from "@mui/icons-material";

const NavBar = () => {
  // Adding all the necessary sections in an array
  const navLinks = [
    {
      id: 1,
      ariaLabel: "basics",
      href: "#",
      icon: <Person />,
    },
    {
      id: 2,
      ariaLabel: "address",
      href: "#",
      icon: <Person />,
    },
    {
      id: 3,
      ariaLabel: "socials",
      href: "#",
      icon: <Person />,
    },
    {
      id: 4,
      ariaLabel: "education",
      href: "#",
      icon: <Person />,
    },
    {
      id: 5,
      ariaLabel: "work-experience",
      href: "#",
      icon: <Person />,
    },
    {
      id: 6,
      ariaLabel: "skills",
      href: "#",
      icon: <Person />,
    },
    {
      id: 7,
      ariaLabel: "projects",
      href: "#",
      icon: <Person />,
    },
    {
      id: 8,
      ariaLabel: "certifications",
      href: "#",
      icon: <Person />,
    },
    {
      id: 9,
      ariaLabel: "awards",
      href: "#",
      icon: <Person />,
    },
    {
      id: 10,
      ariaLabel: "interests",
      href: "#",
      icon: <Person />,
    },
    {
      id: 11,
      ariaLabel: "languages",
      href: "#",
      icon: <Person />,
    },
    {
      id: 12,
      ariaLabel: "publications",
      href: "#",
      icon: <Person />,
    },
    {
      id: 13,
      ariaLabel: "references",
      href: "#",
      icon: <Person />,
    },
  ];

  return (
    <div className="border-2 border-black w-20 flex flex-col items-center">
      {/* TODO: Need to prepare a logo and favicon */}
      <div className="w-full h-16 border-2 border-orange-300">Logo</div>
      <div className="h-4/6 my-auto flex flex-col justify-evenly items-center">
        {/* TODO:  Need to provide icons for following
        Basic details, address, social media, work ex, education, awards, publications, certifications, skills, languages, interests, projects, references */}

        {navLinks.map(({ id, ariaLabel, icon }) => (
          <IconButton key={id} aria-label={ariaLabel}>
            {icon}
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
