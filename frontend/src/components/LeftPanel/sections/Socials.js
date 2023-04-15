import { AlternateEmail, Public } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const Socials = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Public />
        </div>
        <p className="text-3xl">Socials</p>
      </div>
      <TextField fullWidth label="Platform" />
      <TextField
        fullWidth
        label="Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmail />
            </InputAdornment>
          ),
        }}
      />
      <TextField fullWidth label="Website" />
    </div>
  );
};

export default Socials;
