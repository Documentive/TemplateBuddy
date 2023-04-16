import { EmojiEvents } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const Awards = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <EmojiEvents />
        </div>
        <p className="text-3xl">Awards</p>
      </div>
      <TextField fullWidth label="Title" />
      <TextField fullWidth label="Email" />
      <DatePicker
        sx={{ width: 1 }}
        label={"Date awarded"}
        openTo="year"
        views={["year", "month", "day"]}
      />
      <TextField fullWidth label="Summary" multiline rows={5} />
    </div>
  );
};

export default Awards;
