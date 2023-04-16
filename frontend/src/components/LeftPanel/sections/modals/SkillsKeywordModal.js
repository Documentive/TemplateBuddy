import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const SkillsKeywordModal = ({
  openSkillsModal,
  setOpenSkillsModal,
  skills,
  setSkills,
}) => {
  let [skillName, setSkillName] = useState("");

  return (
    <Dialog
      open={openSkillsModal}
      onClose={() => {
        setOpenSkillsModal(false);
      }}
    >
      <DialogTitle>Add a skill</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="course_name"
          label="Skill"
          type="text"
          fullWidth
          onKeyUp={(e) => {
            setSkillName(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setSkills([...skills, skillName]);
            setOpenSkillsModal(false);
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SkillsKeywordModal;
