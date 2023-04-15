import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { React, useState } from "react";

const EducationCourseModal = ({
  openCourseModal,
  setOpenCourseModal,
  courseList,
  setCourseList,
}) => {
  let [courseName, setCourseName] = useState("");

  return (
    <Dialog
      open={openCourseModal}
      onClose={() => {
        setOpenCourseModal(false);
      }}
    >
      <DialogTitle>Add a course</DialogTitle>
      <DialogContent>
        <TextField
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
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setCourseList([...courseList, courseName]);
            setOpenCourseModal(false);
          }}
        >
          Add Course
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EducationCourseModal;
