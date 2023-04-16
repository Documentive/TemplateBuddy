import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Basics from "./sections/Basics";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Volunteer from "./sections/Volunteer";
import Awards from "./sections/Awards";
import Certifications from "./sections/Certifications";
import Languages from "./sections/Languages";
import GenericSection from "./sections/GenericSection";
import {
  certificationsSectionConfig,
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
          <Education />
          <Skills />
          <Volunteer />
          <Awards />
          <GenericSection {...certificationsSectionConfig} />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
