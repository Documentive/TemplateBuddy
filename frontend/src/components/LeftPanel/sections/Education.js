import { School } from "@mui/icons-material";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { React, useState } from "react";
import EducationCourseModal from "./modals/EducationCourseModal";

const Education = () => {
  // let [courseList, setCourseList] = useState([]);
  let [educationList, setEducationList] = useState([]);
  let [openCourseModal, setOpenCourseModal] = useState(false);

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <School />
        </div>
        <p className="text-3xl">Education</p>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setOpenCourseModal(true);
        }}
      >
        Add New Education
      </Button>
      <EducationCourseModal
        openCourseModal={openCourseModal}
        setOpenCourseModal={setOpenCourseModal}
        // courseList={courseList}
        // setCourseList={setCourseList}
        educationList={educationList}
        setEducationList={setEducationList}
      />
      {Object.keys(educationList).length > 0 && (
        <>
          {/* <div>Course List:</div> */}
          <List>
            {/* {courseList.map((course, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemText>{course}</ListItemText>
                </ListItem>
              );
            })} */}
            {Object.keys(educationList).map((edu, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemText>{educationList[edu].institution}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </>
      )}
      {Object.keys(educationList).length === 0 && <div>Nothing added yet!</div>}
    </div>
  );
};

export default Education;
