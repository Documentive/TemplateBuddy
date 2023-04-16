import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";

const GenericModal = ({
  fieldsMap,
  openModal,
  setOpenModal,
  entryList,
  setEntryList,
  fieldName,
}) => {
  let [modalEntryObject, setModalEntryObject] = useState({});
  let [genericList, setGenericList] = useState([]);
  let [genericEntry, setGenericEntry] = useState("");

  const onInputToField = (e, key) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setModalEntryObject({ ...modalEntryObject, [key]: fieldValue });
  };

  const onInputToDatePicker = (d, e, key) => {
    if (e.validationError === null) {
      let date = new Date(d);
      setModalEntryObject({
        ...modalEntryObject,
        [key]: `${date.getMonth() + 1}-${date.getFullYear()}`,
      });
    }
  };

  const handleAddToMultiEntryList = (field) => {
    setGenericList([...genericList, genericEntry]);
    if (!field in modalEntryObject) {
      setModalEntryObject({ ...modalEntryObject, [field]: [] });
    }

    setModalEntryObject({
      ...modalEntryObject,
      [field]: [...genericList, genericEntry],
    });
  };

  return (
    <>
      <Dialog
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <DialogTitle>Add a language</DialogTitle>
        <DialogContent>
          {Object.keys(fieldsMap).map((field) => {
            let value = fieldsMap[field];
            switch (value.type) {
              case "TextField": {
                if ("rows" in value) {
                  return (
                    <TextField
                      fullWidth
                      label={value.label}
                      name={value.label.toLowerCase()}
                      multiline
                      rows={value.rows}
                      onChange={(e) => onInputToField(e, field)}
                    />
                  );
                }
                return (
                  <TextField
                    fullWidth
                    label={value.label}
                    name={value.label.toLowerCase()}
                    onChange={(e) => onInputToField(e, field)}
                  />
                );
              }
              case "Date": {
                return (
                  <DatePicker
                    sx={{ width: 1 }}
                    label={value.label}
                    openTo="year"
                    views={["year", "month", "day"]}
                    slotProps={
                      "helperText" in value
                        ? {
                            textField: {
                              helperText: value.helperText,
                            },
                          }
                        : {}
                    }
                    onChange={(d, e) => onInputToDatePicker(d, e, field)}
                  />
                );
              }
              case "MultiEntryList": {
                return (
                  <div>
                    <TextField
                      label={value.label}
                      name={value.label.toLowerCase()}
                      onKeyUp={(e) => {
                        setGenericEntry(e.target.value);
                      }}
                      sx={{ float: "left" }}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleAddToMultiEntryList(field)}
                    >
                      Add
                    </Button>
                    <br />
                    <br />
                    {genericList.length > 0 && (
                      <List>
                        {genericList.map((entry, idx) => {
                          return (
                            <ListItem key={idx}>
                              <ListItemText>{entry}</ListItemText>
                            </ListItem>
                          );
                        })}
                      </List>
                    )}
                    {genericList.length === 0 && <div>Nothing added yet!</div>}
                  </div>
                );
              }
            }
          })}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setEntryList([...entryList, modalEntryObject]);
              setOpenModal(false);
              setGenericList([]);
            }}
          >
            Add New {fieldName}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GenericModal;
