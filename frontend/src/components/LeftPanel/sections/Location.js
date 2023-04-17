import { Apartment } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Location = () => {
  const { resume, resumeLoading } = useSelector((state) => state.resume);

  const getBasicsLocationValue = (key) => {
    if (!resumeLoading && resume !== null) {
      return resume.basics.location[key];
    }

    return "";
  };

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Apartment />
        </div>
        <p className="text-3xl">Location</p>
      </div>
      <TextField
        fullWidth
        label="Address"
        value={getBasicsLocationValue("address")}
      />
      <TextField
        fullWidth
        label="City"
        value={getBasicsLocationValue("city")}
      />
      <TextField
        fullWidth
        label="Region"
        value={getBasicsLocationValue("region")}
      />
      <TextField
        fullWidth
        label="Country"
        value={getBasicsLocationValue("countryCode")}
      />
      <TextField
        fullWidth
        label="Postal Code"
        value={getBasicsLocationValue("postalCode")}
      />
    </div>
  );
};

export default Location;
