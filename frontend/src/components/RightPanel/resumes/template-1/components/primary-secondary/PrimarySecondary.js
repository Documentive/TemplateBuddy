import React from "react";

import "../../Resume.css";
import * as dateUtils from "../../utils/date_utils";
import * as objectUtils from "../../utils/object_utils";

const PrimarySecondary = ({
  obj,
  getPrimaryInfo,
  getSecondaryInfo,
  primaryField = "name",
  addLineBreaks = true,
}) => {
  return (
    <>
      <p>
        <span className="float-left">
          <strong className="green">
            {getPrimaryInfo(
              objectUtils.getKeyOrEmptyString(obj, [primaryField])
            )}
          </strong>{" "}
          {getSecondaryInfo(obj)}
        </span>
        <span className="float-right">
          {dateUtils.getStartEndDateString(obj)}
        </span>
      </p>
      {addLineBreaks && (
        <>
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default PrimarySecondary;
