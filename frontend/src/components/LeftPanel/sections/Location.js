import { Apartment } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../../../reducers/resume-reducer";

const Location = () => {
  const { resume, resumeLoading } = useSelector((state) => state.resume);
  let [locationObj, setLocationObj] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resumeLoading && resume !== null) {
      setLocationObj(resume.basics.location);
    }
  }, [resume, resumeLoading]);

  const onTextFieldKeyUp = (e) => {
    setLocationObj({ ...locationObj, [e.target.id]: e.target.value });
    dispatch(
      updateResume({
        sectionKeys: ["basics", "location"],
        key: e.target.id,
        value: e.target.value,
      })
    );
  };

  return (
    <div className="font-inter border-b border-slate-500 dark:border-slate-400 py-6">
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2 opacity-50">
          <Apartment />
        </div>
        <p className="text-3xl" id="location">
          Location
        </p>
      </div>
      <div>
        <TextField
          fullWidth
          margin="dense"
          label="Address"
          id="address"
          value={locationObj.address || ""}
          onChange={onTextFieldKeyUp}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <TextField
          fullWidth
          margin="dense"
          label="City"
          id="city"
          value={locationObj.city || ""}
          onChange={onTextFieldKeyUp}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Region"
          id="region"
          value={locationObj.region || ""}
          onChange={onTextFieldKeyUp}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Country"
          id="countryCode"
          value={locationObj.countryCode || ""}
          onChange={onTextFieldKeyUp}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Postal Code"
          id="postalCode"
          value={locationObj.postalCode || ""}
          onChange={onTextFieldKeyUp}
        />
      </div>
    </div>
  );
};

export default Location;
