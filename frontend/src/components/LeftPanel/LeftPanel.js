import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Basics from "./sections/Basics";

const LeftPanel = () => {
  return (
    <div className="w-full h-full border-2 border-solid border-red-300 flex flex-row">
      <NavBar />
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="w-full h-full">
          {/* All resume sections go here
          Each section gets its own component. To be created in the sections folder */}
          <Basics />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
