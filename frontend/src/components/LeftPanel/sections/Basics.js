import { TextField, Avatar, IconButton, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import Location from "./Location";
import { Person } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { uploadImageThunk } from "../../../services/upload-thunk";

import GenericSection from "./GenericListSection";
import { socialsSectionConfig } from "../../../config/sectionConfig";
import { getResumeThunk } from "../../../services/resume-thunk";

const Basics = () => {
  const { imageUploading, imageURL } = useSelector(
    (state) => state.uploadImage
  );
  const { resume, resumeLoading } = useSelector((state) => state.resume);
  let [currentImageFile, setCurrentImageFile] = React.useState(null);

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    setCurrentImageFile(e.target.files[0]);
    dispatch(uploadImageThunk(e.target.files[0]));
  };

  const getBasicsValue = (key) => {
    if (!resumeLoading && resume !== null) {
      return resume.basics[key];
    }

    return "";
  };

  useEffect(() => {
    dispatch(getResumeThunk());
  }, []);

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Person />
        </div>
        <p className="text-3xl">Personal Details</p>
      </div>
      <IconButton component="label">
        <Tooltip title="Upload Image">
          {imageURL === "" ? (
            <Avatar sx={{ width: 96, height: 96 }} />
          ) : (
            <img
              src={imageURL}
              style={{ width: 96, height: 96, borderRadius: "50%" }}
            />
          )}
        </Tooltip>
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </IconButton>
      <TextField fullWidth label="Full Name" value={getBasicsValue("name")} />
      <TextField fullWidth label="Email" value={getBasicsValue("email")} />
      <TextField
        fullWidth
        label="Phone Number"
        value={getBasicsValue("phone")}
      />
      <TextField
        fullWidth
        label="Portfolio Link"
        value={getBasicsValue("url")}
      />
      <TextField fullWidth label="Job Title" value={getBasicsValue("label")} />
      <TextField
        fullWidth
        label="Summary"
        multiline
        rows={5}
        value={getBasicsValue("summary")}
      />
      <hr className="my-3 border-red-800 w-4/5 mx-auto" />
      <Location />
      <hr className="my-3 border-red-800 w-4/5 mx-auto" />
      <GenericSection {...socialsSectionConfig} />
      <hr className="my-3 border-red-800 w-4/5 mx-auto" />
    </div>
  );
};

export default Basics;
