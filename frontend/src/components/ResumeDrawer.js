import React, { useEffect } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SchemaIcon from "@mui/icons-material/Schema";
import { Tooltip, Fade } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { putSectionThunk } from "../services/resume-thunk";

const ResumeDrawer = () => {
  const dispatch = useDispatch();
  let { resume, resumeLoading } = useSelector((state) => state.resume);

  const removeKeyFromObject = (obj, key) => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      obj.forEach(function (item) {
        removeKeyFromObject(item, key);
      });
    } else {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (prop === key) {
            delete obj[prop];
          } else {
            removeKeyFromObject(obj[prop], key);
          }
        }
      }
    }

    return obj;
  };

  useEffect(() => {
    if (!resumeLoading && resume !== null) {
      const interval = setInterval(() => {
        let resumeLocalStorage = localStorage.getItem("resume");
        if (resumeLocalStorage !== JSON.stringify(resume)) {
          const resumeLocalStorageObject = JSON.parse(resumeLocalStorage);

          Object.keys(resumeLocalStorageObject).map((key) => {
            if (
              JSON.stringify(resumeLocalStorageObject[key]) !==
              JSON.stringify(resume[key])
            ) {
              let section_name = key;
              let section = {};
              section[key] = resume[key];
              dispatch(putSectionThunk({ section_name, section }));
            }

            return null;
          });
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [resume, resumeLoading]);

  const exportResumeToJSON = () => {
    let resumeClone = JSON.parse(JSON.stringify(resume));
    let cleanedResume = removeKeyFromObject(resumeClone, "_id");
    cleanedResume = removeKeyFromObject(cleanedResume, "__v");
    const resumeJSON = JSON.stringify(cleanedResume, null, 4);
    const element = document.createElement("a");
    const file = new Blob([resumeJSON], { type: "application/json" });
    element.href = URL.createObjectURL(file);
    let currentTime = new Date();
    element.download = `resume-${currentTime.getTime()}.json`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="flex justify-center items-center dark:bg-neutral-900 bg-neutral-200/40 rounded-3xl z-20 w-1/4 p-3 space-x-5">
      <Tooltip
        title="Import JSON"
        placement="top"
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 800 }}
      >
        <SchemaIcon />
      </Tooltip>
      <Tooltip
        title="Export JSON"
        placement="top"
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 800 }}
      >
        <FileDownloadIcon onClick={exportResumeToJSON} />
      </Tooltip>
      <Tooltip
        title="Download PDF"
        placement="top"
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 800 }}
      >
        <PictureAsPdfIcon />
      </Tooltip>
    </div>
  );
};

export default ResumeDrawer;
