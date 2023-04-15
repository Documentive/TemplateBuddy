import { Apartment } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";

const Location = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Apartment />
        </div>
        <p className="text-3xl">Location</p>
      </div>
      <TextField fullWidth label="Address" />
      <TextField fullWidth label="City" />
      <TextField fullWidth label="Region" />
      <TextField fullWidth label="Country" />
      <TextField fullWidth label="Postal Code" />
    </div>
  );
};

export default Location;
