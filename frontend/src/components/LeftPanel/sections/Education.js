import { School } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { React, useState } from "react";
import EducationCourseModal from "./modals/EducationCourseModal";

const Education = () => {
  let [courseList, setCourseList] = useState([]);
  let [openCourseModal, setOpenCourseModal] = useState(false);

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <School />
        </div>
        <p className="text-3xl">Education</p>
      </div>
      <TextField fullWidth label="Institution" />
      <TextField fullWidth label="URL" />
      <TextField fullWidth label="Area" />
      <TextField fullWidth label="Study Type" />
      <DatePicker
        sx={{ width: 1 }}
        label={"Start Date"}
        openTo="year"
        views={["year", "month", "day"]}
      />
      <DatePicker
        sx={{ width: 1 }}
        label={"End Date"}
        openTo="year"
        views={["year", "month", "day"]}
        slotProps={{
          textField: {
            helperText: "Leave this field blank, if still in this institution",
          },
        }}
      />
      <TextField fullWidth label="Score" />

      <Button
        variant="contained"
        onClick={() => {
          setOpenCourseModal(true);
        }}
      >
        Add Course
      </Button>
      <EducationCourseModal
        openCourseModal={openCourseModal}
        setOpenCourseModal={setOpenCourseModal}
        courseList={courseList}
        setCourseList={setCourseList}
      />
      {courseList.length > 0 && (
        <>
          <div>Course List:</div>
          <List>
            {courseList.map((course, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemText>{course}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </>
      )}
      {courseList.length === 0 && <div>No courses added yet!</div>}
    </div>
  );
};

export default Education;
