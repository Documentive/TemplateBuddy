import { Work } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

const WorkExperience = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Work />
        </div>
        <p className="text-3xl">Work Experience</p>
      </div>
      <TextField fullWidth label="Company" />
      <TextField fullWidth label="Location" />
      <TextField fullWidth label="Role" />
      <TextField fullWidth label="Company Link" />
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
            helperText: "Leave this field blank, if still present",
          },
        }}
      />
      <TextField fullWidth label="Summary" multiline rows={5} />
    </div>
  );
};

export default WorkExperience;
