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
  let [genericListMap, setGenericListMap] = useState({});
  let [genericEntryMap, setGenericEntryMap] = useState({});

  const onInputToField = (e, key) => {
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
    if (!(field in genericListMap)) {
      setGenericListMap({
        ...genericListMap,
        [field]: [genericEntryMap[field]],
      });
    } else {
      setGenericListMap({
        ...genericListMap,
        [field]: [...genericListMap[field], genericEntryMap[field]],
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
        <DialogTitle>Add a {fieldName}</DialogTitle>
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
                      key={field}
                    />
                  );
                }
                return (
                  <TextField
                    fullWidth
                    label={value.label}
                    name={value.label.toLowerCase()}
                    onChange={(e) => onInputToField(e, field)}
                    key={field}
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
                    key={field}
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
                  <div key={field}>
                    <TextField
                      label={value.label}
                      name={value.label.toLowerCase()}
                      onKeyUp={(e) => {
                        setGenericEntryMap({
                          ...genericEntryMap,
                          [field]: e.target.value,
                        });
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
                    {field in genericListMap &&
                      genericListMap[field].length > 0 && (
                        <List>
                          {genericListMap[field].map((entry, idx) => {
                            return (
                              <ListItem key={idx}>
                                <ListItemText>{entry}</ListItemText>
                              </ListItem>
                            );
                          })}
                        </List>
                      )}
                    {!(field in genericListMap) && (
                      <div>Nothing added yet!</div>
                    )}
                  </div>
                );
              }
            }
          })}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setEntryList([
                ...entryList,
                { ...modalEntryObject, ...genericListMap },
              ]);
              setOpenModal(false);
              setGenericListMap({});
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
