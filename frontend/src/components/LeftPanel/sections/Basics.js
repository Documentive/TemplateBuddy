import { TextField, Avatar, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import Location from "./Location";
import { Person } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { uploadImageThunk } from "../../../services/upload-thunk";

import GenericSection from "./GenericListSection";
import { socialsSectionConfig } from "../../../config/sectionConfig";
import {
  getResumeThunk,
  putSectionThunk,
} from "../../../services/resume-thunk";
import {
  getCurrentResume,
  updateResume,
} from "../../../reducers/resume-reducer";

const Basics = () => {
  const { imageUploading, imageURL } = useSelector(
    (state) => state.uploadImage
  );
  const { resume, resumeLoading } = useSelector((state) => state.resume);
  let [basicsObj, setBasicsObj] = useState({});

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    dispatch(uploadImageThunk(e.target.files[0]));
  };

  const onTextFieldKeyUp = (e) => {
    setBasicsObj({ ...basicsObj, [e.target.id]: e.target.value });
    dispatch(
      updateResume({
        sectionKey: "basics",
        key: e.target.id,
        value: e.target.value,
      })
    );
  };

  useEffect(() => {
    dispatch(getResumeThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!resumeLoading && resume !== null) {
      setBasicsObj(resume.basics);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume, resumeLoading]);

  const getImage = () => {
    if (!imageUploading && imageURL !== "") {
      return (
        <img
          src={imageURL}
          alt="profile"
          style={{ width: 96, height: 96, borderRadius: "50%" }}
        />
      );
    } else if (Object.keys(basicsObj).length > 0 && "image" in basicsObj) {
      return (
        <img
          src={`${process.env.REACT_APP_API_BASE}${basicsObj.image}`}
          alt="profile"
          style={{ width: 96, height: 96, borderRadius: "50%" }}
        />
      );
    } else {
      return <Avatar sx={{ width: 96, height: 96 }} />;
    }
  };

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Person />
        </div>
        <p className="text-3xl" id="personal-details">
          Personal Details
        </p>
      </div>
      <IconButton component="label">
        <Tooltip title="Upload Image">{getImage()}</Tooltip>
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </IconButton>
      <TextField
        fullWidth
        label="Full Name"
        id="name"
        value={basicsObj.name || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="Email"
        id="email"
        value={basicsObj.email || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="Phone Number"
        id="phone"
        value={basicsObj.phone || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="Portfolio Link"
        id="url"
        value={basicsObj.url || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="Job Title"
        id="label"
        value={basicsObj.label || ""}
        onChange={onTextFieldKeyUp}
      />
      <TextField
        fullWidth
        label="Summary"
        multiline
        rows={5}
        id="summary"
        value={basicsObj.summary || ""}
        onChange={onTextFieldKeyUp}
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
