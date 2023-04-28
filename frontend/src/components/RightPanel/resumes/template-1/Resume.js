import { useSelector } from "react-redux";
import "./Resume.css";
import PrimarySecondary from "./components/primary-secondary/PrimarySecondary";
import Section from "./components/section/Section";
import YearHighlights from "./components/year-highlights/YearHighlights";
import * as objectUtils from "./utils/object_utils";
import { useEffect, useState } from "react";

function Resume() {
  let { resume, resumeLoading } = useSelector((state) => state.resume);

  const getKeywordAsString = (keywords) => {
    let keywordString = "";
    keywords.forEach((keyword, idx) => {
      if (idx === keywords.length - 1) {
        keywordString += keyword;
      } else {
        keywordString += keyword + ", ";
      }
    });
    return keywordString;
  };

  const getSecondaryInfoEducation = (obj) => {
    const location = objectUtils.getKeyOrEmptyString(obj, ["location"]);
    return `${location}`;
  };

  const getSecondaryInfoWork = (obj) => {
    const position = objectUtils.getKeyOrEmptyString(obj, ["position"]);
    const location = objectUtils.getKeyOrEmptyString(obj, ["location"]);
    return `${position}, ${location}`;
  };

  const getSecondaryInfoProject = (obj) => {
    const url = objectUtils.getKeyOrEmptyString(obj, ["url"]);
    return `[${url}]`;
  };

  return (
    <>
      <div className="resume">
        <h1>{objectUtils.getKeyOrEmptyString(resume, ["basics", "name"])}</h1>
        <p className="no-margin-top">
          {objectUtils.getKeyOrEmptyString(resume, ["basics", "email"])} |{" "}
          {objectUtils.getKeyOrEmptyString(resume, [
            "basics",
            "profiles",
            0,
            "url",
          ])}{" "}
          |{" "}
          {objectUtils.getKeyOrEmptyString(resume, [
            "basics",
            "profiles",
            1,
            "url",
          ])}{" "}
          |{" "}
          {objectUtils.getKeyOrEmptyString(resume, [
            "basics",
            "location",
            "city",
          ])}
          ,{" "}
          {objectUtils.getKeyOrEmptyString(resume, [
            "basics",
            "location",
            "region",
          ])}{" "}
          | {objectUtils.getKeyOrEmptyString(resume, ["basics", "phone"])}
        </p>
        <Section title="Education" />

        {objectUtils
          .getKeyOrEmptyArray(resume, ["education"])
          .map((edu, idx) => {
            return (
              <div className="left" key={idx}>
                <PrimarySecondary
                  obj={edu}
                  getPrimaryInfo={(val) => {
                    return val;
                  }}
                  getSecondaryInfo={getSecondaryInfoEducation}
                  primaryField="institution"
                  addLineBreaks={false}
                />
                <p className="clear">
                  <span className="float-left">
                    {objectUtils.getKeyOrEmptyString(edu, ["studyType"])} in{" "}
                    {objectUtils.getKeyOrEmptyString(edu, ["area"])}, GPA:{" "}
                    <strong>
                      {objectUtils.getKeyOrEmptyString(edu, ["score"])}
                    </strong>
                  </span>
                </p>
                <p className="clear">
                  Related courses:{" "}
                  {objectUtils
                    .getKeyOrEmptyArray(edu, ["courses"])
                    .map((course, idx) => {
                      if (
                        idx ===
                        objectUtils.getKeyOrEmptyArray(edu, ["courses"])
                          .length -
                          1
                      ) {
                        return course;
                      } else {
                        return course + ", ";
                      }
                    })}
                </p>
              </div>
            );
          })}

        <Section title="Technical Knowledge" />

        <table>
          <tbody>
            {objectUtils
              .getKeyOrEmptyArray(resume, ["skills"])
              .map((skill, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      <strong>
                        {objectUtils.getKeyOrEmptyString(skill, ["name"])}:
                      </strong>
                    </td>
                    <td className="padding-left">
                      {getKeywordAsString(
                        objectUtils.getKeyOrEmptyArray(skill, ["keywords"])
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <YearHighlights
          arrayObj={objectUtils.getKeyOrEmptyArray(resume, ["work"])}
          sectionTitle="Work Experience"
          getSecondaryInfo={getSecondaryInfoWork}
          getPrimaryInfo={(val) => {
            return val.toUpperCase();
          }}
        />

        <YearHighlights
          arrayObj={objectUtils.getKeyOrEmptyArray(resume, ["projects"])}
          sectionTitle="Projects"
          getSecondaryInfo={getSecondaryInfoProject}
          getPrimaryInfo={(val) => {
            return val;
          }}
        />
      </div>
    </>
  );
}

export default Resume;
