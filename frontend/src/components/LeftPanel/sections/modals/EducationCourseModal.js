import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { React, useState } from "react";

const EducationCourseModal = ({
  openCourseModal,
  setOpenCourseModal,
  // courseList,
  // setCourseList,
  educationList,
  setEducationList,
}) => {
  // let [courseName, setCourseName] = useState("");
  let [educationObject, setEducationObject] = useState({
    institution: "",
    url: "",
    area: "",
    studyType: "",
    startDate: null,
    endDate: null,
    score: "",
  });

  const handleEducationInput = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setEducationObject({ ...educationObject, [fieldName]: fieldValue });
  };

  return (
    <Dialog
      open={openCourseModal}
      onClose={() => {
        setOpenCourseModal(false);
      }}
    >
      <DialogTitle>Add a course</DialogTitle>
      <DialogContent>
        {/* <TextField
          autoFocus
          margin="dense"
          id="course_name"
          label="Course Name"
          type="text"
          fullWidth
          variant="standard"
          onKeyUp={(e) => {
            setCourseName(e.target.value);
          }}
        /> */}
        <TextField
          fullWidth
          label="Institution"
          name="institution"
          onChange={handleEducationInput}
        />
        <TextField
          fullWidth
          label="URL"
          name="url"
          onChange={handleEducationInput}
        />
        <TextField
          fullWidth
          label="Area"
          name="area"
          onChange={handleEducationInput}
        />
        <TextField
          fullWidth
          label="Study Type"
          name="studyType"
          onChange={handleEducationInput}
        />
        <DatePicker
          sx={{ width: 1 }}
          label={"Start Date"}
          openTo="year"
          views={["year", "month", "day"]}
          value={educationObject.startDate}
          onChange={(newValue) =>
            setEducationObject({
              ...educationObject,
              startDate: newValue,
            })
          }
        />
        <DatePicker
          sx={{ width: 1 }}
          label={"End Date"}
          openTo="year"
          views={["year", "month", "day"]}
          slotProps={{
            textField: {
              helperText:
                "Leave this field blank, if still in this institution",
            },
          }}
          value={educationObject.endDate}
          onChange={(newValue) =>
            setEducationObject({
              ...educationObject,
              endDate: newValue,
            })
          }
        />
        <TextField
          fullWidth
          label="Score"
          name="score"
          onChange={handleEducationInput}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            // setCourseList([...courseList, courseName]);
            setEducationList([...educationList, educationObject]);
            setOpenCourseModal(false);
          }}
        >
          Add New Education
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EducationCourseModal;
