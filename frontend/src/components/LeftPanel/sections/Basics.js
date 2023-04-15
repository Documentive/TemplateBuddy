import { TextField, Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";

const Basics = () => {
  return (
    <div>
      <IconButton component="button">
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
    </div>
  );
};

export default Basics;
