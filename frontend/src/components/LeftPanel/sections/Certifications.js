import { Redeem } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const Certifications = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Redeem />
        </div>
        <p className="text-3xl">Certifications</p>
      </div>
      <TextField fullWidth label="Name" />
      <DatePicker
        sx={{ width: 1 }}
        label={"Date certified"}
        openTo="year"
        views={["year", "month", "day"]}
      />
      <TextField fullWidth label="Awarder" />
      <TextField fullWidth label="Summary" multiline rows={5} />
    </div>
  );
};

export default Certifications;
