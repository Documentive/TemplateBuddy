import { Apartment } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Location = () => {
  const { resume, resumeLoading } = useSelector((state) => state.resume);
  let [locationObj, setLocationObj] = useState({});

  useEffect(() => {
    if (!resumeLoading && resume !== null) {
      setLocationObj(resume.basics.location);
    }
  }, [resume, resumeLoading]);

  const updateInLocalStorage = (key, value) => {
    if (!resumeLoading && resume !== null) {
      let resume = JSON.parse(localStorage.getItem("resume"));
      resume.basics.location[key] = value;
      localStorage.setItem("resume", JSON.stringify(resume));
    }
  };

  const onTextFieldKeyUp = (e) => {
    setLocationObj({ ...locationObj, [e.target.id]: e.target.value });
    updateInLocalStorage(e.target.id, e.target.value);
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
        id="address"
        value={locationObj.address || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="City"
        id="city"
        value={locationObj.city || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="Region"
        id="region"
        value={locationObj.region || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="Country"
        id="countryCode"
        value={locationObj.countryCode || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="Postal Code"
        id="postalCode"
        value={locationObj.postalCode || ""}
        onChange={onTextFieldKeyUp}
      />
    </div>
  );
};

export default Location;
