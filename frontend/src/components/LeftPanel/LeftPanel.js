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

const LeftPanel = ({ check, handleThemeToggle }) => {
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

  return (
    <div className="w-full h-full flex flex-row">
      <NavBar />
      <div className="w-full h-full flex flex-col">
        <Header check={check} handleThemeToggle={handleThemeToggle} />
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
