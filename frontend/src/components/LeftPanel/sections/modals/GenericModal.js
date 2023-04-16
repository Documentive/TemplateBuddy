import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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

  const onInputToField = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setModalEntryObject({ ...modalEntryObject, [fieldName]: fieldValue });
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
                      onChange={onInputToField}
                    />
                  );
                }
                return (
                  <TextField
                    fullWidth
                    label={value.label}
                    name={value.label.toLowerCase()}
                    onChange={onInputToField}
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
            }
          })}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setEntryList([...entryList, modalEntryObject]);
              setOpenModal(false);
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
