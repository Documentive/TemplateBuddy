import React, { useEffect, useState } from "react";
import GenericModal from "./modals/GenericListModal";
import { Button, List, ListItem, ListItemText } from "@mui/material";

const GenericSection = ({ fieldsMap, fieldName, fieldIcon, displayField }) => {
  let [openModal, setOpenModal] = useState(false);
  let [entryList, setEntryList] = useState([]);

  useEffect(() => {
    console.log(entryList);
  }, [entryList]);

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">{fieldIcon}</div>
        <p className="text-3xl">{fieldName}</p>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add New {fieldName}
      </Button>
      <GenericModal
        fieldsMap={fieldsMap}
        openModal={openModal}
        setOpenModal={setOpenModal}
        entryList={entryList}
        setEntryList={setEntryList}
        fieldName={fieldName}
      />
      {Object.keys(entryList).length > 0 && (
        <>
          <List>
            {Object.keys(entryList).map((entry, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemText>{entryList[entry][displayField]}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </>
      )}
      {Object.keys(entryList).length === 0 && <div>Nothing added yet!</div>}
    </div>
  );
};

export default GenericSection;
