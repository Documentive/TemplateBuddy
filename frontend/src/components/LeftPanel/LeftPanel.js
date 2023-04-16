import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import WorkExperience from "./sections/WorkExperience";
import Basics from "./sections/Basics";
import Awards from "./sections/Awards";
import Certifications from "./sections/Certifications";

const LeftPanel = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <NavBar />
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="w-full h-full overflow-y-scroll">
          {/* All resume sections go here
          Each section gets its own component. To be created in the sections folder */}
          <WorkExperience />
          <Basics />
          <Awards />
          <Certifications />

        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
