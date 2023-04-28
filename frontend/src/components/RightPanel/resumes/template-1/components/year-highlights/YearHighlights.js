import React from "react";

import "../../Resume.css";
import Section from "../section/Section";
import PrimarySecondary from "../primary-secondary/PrimarySecondary";
import * as objectUtils from "../../utils/object_utils";

const YearHighlights = ({
  arrayObj,
  sectionTitle,
  getPrimaryInfo,
  getSecondaryInfo,
}) => {
  return (
    <>
      <Section title={sectionTitle} />
      {arrayObj.map((obj, idx) => {
        return (
          <div className="left" key={idx}>
            <PrimarySecondary
              obj={obj}
              getPrimaryInfo={getPrimaryInfo}
              getSecondaryInfo={getSecondaryInfo}
            />
            <ul className="no-margin-top">
              {objectUtils
                .getKeyOrEmptyArray(obj, ["highlights"])
                .map((highlight, idx) => {
                  return (
                    <li
                      dangerouslySetInnerHTML={{ __html: highlight }}
                      key={idx}
                    ></li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default YearHighlights;
