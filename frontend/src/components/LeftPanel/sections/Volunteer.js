import { Language } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const Volunteer = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Language />
        </div>
        <p className="text-3xl">Personal Details</p>
      </div>
      <TextField fullWidth label="Organization" />
      <TextField fullWidth label="Position" />
      <TextField fullWidth label="URL" />
      <DatePicker
        sx={{ width: 1 }}
        label={"Start Date"}
        openTo="year"
        views={["year", "month", "day"]}
      />
      <DatePicker
        sx={{ width: 1 }}
        label={"End Date"}
        openTo="year"
        views={["year", "month", "day"]}
        slotProps={{
          textField: {
            helperText: "Leave this field blank, if still volunteering here",
          },
        }}
      />
      <TextField fullWidth label="Summary" multiline rows={5} />
      <TextField fullWidth label="Highlights" multiline rows={5} />
    </div>
  );
};

export default Volunteer;
