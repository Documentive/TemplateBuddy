import { TextField, Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";
import Location from "./Location";
import { Person } from "@mui/icons-material";
import Socials from "./Socials";

const Basics = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Person />
        </div>
        <p className="text-3xl">Personal Details</p>
      </div>
      <IconButton component="label">
        <Tooltip title="Upload Image">
          <Avatar sx={{ width: 96, height: 96 }} />
        </Tooltip>
        <input hidden type="file" accept="image/*" />
      </IconButton>
      <TextField fullWidth label="Full Name" />
      <TextField fullWidth label="Email" />
      <TextField fullWidth label="Phone Number" />
      <TextField fullWidth label="Portfolio Link" />
      <TextField fullWidth label="Job Title" />
      <TextField fullWidth label="Summary" multiline rows={5} />
      <hr className="my-3 border-red-800 w-4/5 mx-auto" />
      <Location />
      <hr className="my-3 border-red-800 w-4/5 mx-auto" />
      <Socials />
      <hr className="my-3 border-red-800 w-4/5 mx-auto" />
    </div>
  );
};

export default Basics;
