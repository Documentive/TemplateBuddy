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
        sectionKeys: ["basics"],
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
        <div className="ml-2 opacity-50">
          <Person />
        </div>
        <p className="text-3xl" id="personal-details">
          Personal Details
        </p>
      </div>
      <div className="grid grid-rows-2 grid-cols-6 gap-x-4">
        <div className="row-span-2 col-span-1">
          <IconButton component="label">
            <Tooltip title="Upload Image">{getImage()}</Tooltip>
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </IconButton>
        </div>
        <div className="row-span-1 col-span-5">
          <TextField
            fullWidth
            margin="dense"
            label="Full Name"
            id="name"
            value={basicsObj.name || ""}
            onChange={onTextFieldKeyUp}
          />
        </div>
        <div className="row-span-1 col-span-5">
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            id="email"
            value={basicsObj.email || ""}
            onChange={onTextFieldKeyUp}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <TextField
          fullWidth
          margin="dense"
          label="Phone Number"
          id="phone"
          value={basicsObj.phone || ""}
          onChange={onTextFieldKeyUp}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Portfolio Link"
          id="url"
          value={basicsObj.url || ""}
          onChange={onTextFieldKeyUp}
        />
      </div>
      <div>
        <TextField
          fullWidth
          margin="dense"
          label="Job Title"
          id="label"
          value={basicsObj.label || ""}
          onChange={onTextFieldKeyUp}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Summary"
          multiline
          rows={5}
          id="summary"
          value={basicsObj.summary || ""}
          onChange={onTextFieldKeyUp}
        />
      </div>
      <hr className="my-4 border-slate-400 w-full mx-auto" />
      <Location />
      <hr className="my-4 border-slate-400 w-full mx-auto" />
      <GenericSection {...socialsSectionConfig} />
      <hr className="my-4 border-slate-400 w-full mx-auto" />
    </div>
  );
};

export default Basics;
