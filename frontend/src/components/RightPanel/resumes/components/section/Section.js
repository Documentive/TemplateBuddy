import React from "react";

import "../../Resume.css";

const Section = ({ title }) => {
  return (
    <>
      <p className="left no-margin-bottom">
        <strong>{title.toUpperCase()}</strong>
      </p>
      <hr />
    </>
  );
};

export default Section;
