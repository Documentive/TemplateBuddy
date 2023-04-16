import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Basics from "./sections/Basics";
import GenericSection from "./sections/GenericSection";
import {
  awardsSectionConfig,
  certificationsSectionConfig,
  educationSectionConfig,
  languagesSectionConfig,
  skillsSectionConfig,
  volunteerSectionConfig,
  workExperienceSectionConfig,
} from "../../config/sectionConfig";

const LeftPanel = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <NavBar />
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="w-full h-full overflow-y-scroll">
          <GenericSection {...workExperienceSectionConfig} />
          <Basics />
          <GenericSection {...educationSectionConfig} />
          <GenericSection {...skillsSectionConfig} />
          <GenericSection {...volunteerSectionConfig} />
          <GenericSection {...awardsSectionConfig} />
          <GenericSection {...certificationsSectionConfig} />
          <GenericSection {...languagesSectionConfig} />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
