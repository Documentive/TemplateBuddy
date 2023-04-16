import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import WorkExperience from "./sections/WorkExperience";
import Basics from "./sections/Basics";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Volunteer from "./sections/Volunteer";
import Awards from "./sections/Awards";
import Certifications from "./sections/Certifications";
import Languages from "./sections/Languages";
import { Work } from "@mui/icons-material";
import GenericSection from "./sections/GenericSection";

const LeftPanel = () => {
  const workExperienceSectionConfig = {
    fieldsMap: {
      company: {
        type: "TextField",
        label: "Company",
      },
      location: {
        type: "TextField",
        label: "Location",
      },
      role: {
        type: "TextField",
        label: "Role",
      },
      startDate: {
        type: "Date",
        label: "Start Date",
      },
      endDate: {
        type: "Date",
        label: "End Date",
        helperText: "Leave blank if you are still working here",
      },
      summary: {
        type: "TextField",
        label: "Summary",
        rows: 5,
      },
    },
    fieldName: "Work Experience",
    fieldIcon: <Work />,
    displayField: "company",
  };

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
          <Certifications />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
