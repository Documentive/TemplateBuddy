import React from "react";
import Resume from "./resumes/template-1/Resume";

const RightPanel = () => {
  return (
    <div className="w-11/12 h-[90vh] mx-auto border">
      <div>
        {/* This will act as the base container which will get zoomed in/out. The parent div has fixed width and height. */}
        <Resume />
      </div>
    </div>
  );
};

export default RightPanel;
