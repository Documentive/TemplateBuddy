import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Basics from "./sections/Basics";
import GenericSection from "./sections/GenericListSection";
import {
  awardsSectionConfig,
  certificationsSectionConfig,
  educationSectionConfig,
  interestsSectionConfig,
  languagesSectionConfig,
  projectsSectionConfig,
  publicationsSectionConfig,
  referencesSectionConfig,
  skillsSectionConfig,
  volunteerSectionConfig,
  workExperienceSectionConfig,
} from "../../config/sectionConfig";
import { useDispatch, useSelector } from "react-redux";
import { putSectionThunk } from "../../services/resume-thunk";
import { Button } from "@mui/material";

const LeftPanel = ({ check, handleThemeToggle }) => {
  let { resume, resumeLoading } = useSelector((state) => state.resume);

  const sectionsList = [
    {
      type: "Basics",
    },
    {
      type: "GenericSection",
      config: educationSectionConfig,
    },
    {
      type: "GenericSection",
      config: workExperienceSectionConfig,
    },
    {
      type: "GenericSection",
      config: projectsSectionConfig,
    },
    {
      type: "GenericSection",
      config: skillsSectionConfig,
    },
    {
      type: "GenericSection",
      config: certificationsSectionConfig,
    },
    {
      type: "GenericSection",
      config: languagesSectionConfig,
    },
    {
      type: "GenericSection",
      config: publicationsSectionConfig,
    },
    {
      type: "GenericSection",
      config: awardsSectionConfig,
    },
    {
      type: "GenericSection",
      config: interestsSectionConfig,
    },
    {
      type: "GenericSection",
      config: volunteerSectionConfig,
    },

    {
      type: "GenericSection",
      config: referencesSectionConfig,
    },
  ];

  const dispatch = useDispatch();

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

  return (
    <div className="w-full h-full flex flex-row">
      <NavBar />
      <div className="w-full h-full flex flex-col">
        <Header check={check} handleThemeToggle={handleThemeToggle} />
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "30%" }}
          onClick={exportResumeToJSON}
        >
          Export JSON
        </Button>
        <div className="w-full h-full overflow-y-scroll no-scrollbar ">
          <div className="w-4/5 mx-auto">
            {sectionsList.map((section, index) => {
              if (section.type === "GenericSection") {
                return (
                  <div>
                    <GenericSection {...section.config} key={index} />
                  </div>
                );
              } else if (section.type === "Basics") {
                return <Basics key={index} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
