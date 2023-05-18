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

const LeftPanel = ({handleThemeToggle}) => {
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
        <Header handleThemeToggle={handleThemeToggle} />
        <div className="w-full h-full overflow-y-scroll no-scrollbar bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
          <div className="w-4/5 mx-auto">
            {sectionsList.map((section, index) => {
              if (section.type === "GenericSection") {
                return (
                  <div>
                    <GenericSection {...section.config} key={index} />
                    <hr className="my-4 border-slate-400 w-full mx-auto" />
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
