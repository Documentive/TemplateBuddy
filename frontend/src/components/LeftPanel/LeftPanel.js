import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Basics from "./sections/Basics";
import Skills from "./sections/Skills";
import GenericSection from "./sections/GenericSection";
import {
  awardsSectionConfig,
  certificationsSectionConfig,
  educationSectionConfig,
  languagesSectionConfig,
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
          {/* All resume sections go here
          Each section gets its own component. To be created in the sections folder */}
          {/* <WorkExperience /> */}
          <GenericSection {...workExperienceSectionConfig} />
          <Basics />
          <GenericSection {...educationSectionConfig} />
          <Skills />
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
