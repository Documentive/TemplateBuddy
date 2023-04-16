import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const LanguagesModal = ({
  openLanguagesModal,
  setOpenLanguagesModal,
  languages,
  setLanguages,
}) => {
  let [languageObject, setLanguageObject] = useState({
    languageName: "",
    fluency: "",
  });

  const handleLanguageInput = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setLanguageObject({ ...languageObject, [fieldName]: fieldValue });
  };

  return (
    <Dialog
      open={openLanguagesModal}
      onClose={() => {
        setOpenLanguagesModal(false);
      }}
    >
      <DialogTitle>Add a language</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          fullWidth
          label="Language"
          name="languageName"
          onChange={handleLanguageInput}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Fluency"
          name="fluency"
          onChange={handleLanguageInput}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setLanguages([...languages, languageObject]);
            setOpenLanguagesModal(false);
          }}
        >
          Add New Language
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LanguagesModal;
