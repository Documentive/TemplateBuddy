import { Language } from "@mui/icons-material";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import LanguagesModal from "./modals/LanguagesModal";

const Languages = () => {
  let [languages, setLanguages] = useState([]);
  let [openLanguagesModal, setOpenLanguagesModal] = useState(false);
  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <Language />
        </div>
        <p className="text-3xl">Languages</p>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setOpenLanguagesModal(true);
        }}
      >
        Add New Language
      </Button>
      <LanguagesModal
        languages={languages}
        setLanguages={setLanguages}
        openLanguagesModal={openLanguagesModal}
        setOpenLanguagesModal={setOpenLanguagesModal}
      />

      {Object.keys(languages).length > 0 && (
        <>
          <List>
            {Object.keys(languages).map((language, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemText>
                    {languages[language].languageName}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </>
      )}

      {Object.keys(languages).length === 0 && <div>No languages added yet</div>}
    </div>
  );
};

export default Languages;
