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
import { useSelector } from "react-redux";

const GenericModal = ({
  fieldsMap,
  openModal,
  setOpenModal,
  entryList,
  setEntryList,
  fieldName,
  dbField,
  fieldGroups,
}) => {
  const { resume, resumeLoading } = useSelector((state) => state.resume);
  let [modalEntryObject, setModalEntryObject] = useState({});
  let [genericListMap, setGenericListMap] = useState({});
  let [genericEntryMap, setGenericEntryMap] = useState({});

  // To store the markup for all fields
  let fieldDOM = {};

  const onInputToField = (e, key) => {
    let fieldValue = e.target.value;
    setModalEntryObject({ ...modalEntryObject, [key]: fieldValue });
  };

  const onInputToDatePicker = (d, e, key) => {
    if (e.validationError === null) {
      let date = new Date(d);
      setModalEntryObject({
        ...modalEntryObject,
        [key]: {
          month: date.getMonth() + 1,
          year: date.getFullYear(),
        },
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

  const updateInLocalStorage = (obj) => {
    if (!resumeLoading && resume !== null) {
      let resume = JSON.parse(localStorage.getItem("resume"));
      let arrayObj = resume[dbField[0]];
      for (let i = 1; i < dbField.length; i++) {
        arrayObj = arrayObj[dbField[i]];
      }
      arrayObj.push(obj);
      localStorage.setItem("resume", JSON.stringify(resume));
    }
  };

  const onSubmitBtnClick = () => {
    setEntryList([...entryList, { ...modalEntryObject, ...genericListMap }]);
    setOpenModal(false);
    setGenericListMap({});
    const finalMap = { ...modalEntryObject, ...genericListMap };
    updateInLocalStorage(finalMap);
  };

  // Add the markup for the fields based on the fieldtype to the fieldDOM object
  Object.keys(fieldsMap).map((field) => {
    let value = fieldsMap[field];
    let content;
    switch (value.type) {
      case "TextField": {
        if ("rows" in value) {
          content = (
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
        } else {
          content = (
            <TextField
              fullWidth
              label={value.label}
              name={value.label.toLowerCase()}
              onChange={(e) => onInputToField(e, field)}
              key={field}
            />
          );
        }
        fieldDOM[field] = content;
        break;
      }
      case "Date": {
        content = (
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
        fieldDOM[field] = content;
        break;
      }
      case "MultiEntryList": {
        content = (
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
            {field in genericListMap && genericListMap[field].length > 0 && (
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
            {!(field in genericListMap) && <div>Nothing added yet!</div>}
          </div>
        );
        fieldDOM[field] = content;
        break;
      }
    }
  });

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
          {fieldGroups.map((group) => {
            if (group.length > 1) {
              return (
                <div className="grid grid-cols-2 my-3 gap-4">
                  {group.map((element) => {
                    return fieldDOM[element];
                  })}
                </div>
              );
            } else {
              return <div>{fieldDOM[group[0]]}</div>;
            }
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmitBtnClick}>Add New {fieldName}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GenericModal;
