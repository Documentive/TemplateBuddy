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
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modes } from "../../constants/modes";
import {
  updateResume,
  updateResumeArray,
} from "../../../../reducers/resume-reducer";

const GenericModal = ({
  fieldsMap,
  openModal,
  setOpenModal,
  entryList,
  setEntryList,
  fieldName,
  dbField,
  fieldGroups,
  modalMode,
  setModalMode,
  currentModalIdx,
}) => {
  const { resume, resumeLoading } = useSelector((state) => state.resume);
  let [modalEntryObject, setModalEntryObject] = useState({});
  let [genericListMap, setGenericListMap] = useState({});
  let [genericEntryMap, setGenericEntryMap] = useState({});
  let [genericFieldEntryIdxMap, setGenericEntryFieldIdxMap] = useState({});
  let [isEditingFieldEntryIdxMap, setIsEditingFieldEntryIdxMap] = useState({});

  const dispatch = useDispatch();

  const cleanState = () => {
    setModalEntryObject({});
    setGenericListMap({});
    setGenericEntryMap({});
    setGenericEntryFieldIdxMap({});
    setIsEditingFieldEntryIdxMap({});
    setOpenModal(false);
    setModalMode(modes.ADD);
  };

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

      if (modalMode == modes.EDIT) {
        arrayObj[currentModalIdx] = obj;
      } else {
        arrayObj.push(obj);
      }

      localStorage.setItem("resume", JSON.stringify(resume));
    }
  };

  useEffect(() => {
    if (modalMode == modes.EDIT && currentModalIdx !== -1) {
      let arrayObj = resume[dbField[0]];
      for (let i = 1; i < dbField.length; i++) {
        arrayObj = arrayObj[dbField[i]];
      }
      setModalEntryObject(arrayObj[currentModalIdx]);

      Object.keys(fieldsMap).map((field) => {
        if (fieldsMap[field].type === "MultiEntryList") {
          setGenericListMap({
            ...genericListMap,
            [field]: arrayObj[currentModalIdx][field],
          });
        }
      });
    } else {
      setModalEntryObject({});
    }
  }, [modalMode, currentModalIdx]);

  const onSubmitBtnClick = () => {
    if (modalMode == modes.EDIT) {
      let tempEntryList = [...entryList];
      tempEntryList[currentModalIdx] = {
        ...modalEntryObject,
        ...genericListMap,
      };
      setEntryList(tempEntryList);
    } else {
      setEntryList([...entryList, { ...modalEntryObject, ...genericListMap }]);
    }

    const finalMap = { ...modalEntryObject, ...genericListMap };

    if (modalMode == modes.EDIT) {
      console.log(dbField, currentModalIdx);
      dispatch(
        updateResume({
          sectionKeys: dbField,
          key: currentModalIdx,
          value: finalMap,
        })
      );
    } else {
      dispatch(
        updateResumeArray({
          sectionKeys: dbField,
          value: finalMap,
        })
      );
    }

    cleanState();
  };

  const getValue = (fieldName) => {
    return modalEntryObject[fieldName] ? modalEntryObject[fieldName] : "";
  };

  const getDateValue = (fieldName) => {
    if (modalEntryObject[fieldName]) {
      return dayjs(
        `${modalEntryObject[fieldName].year}-${modalEntryObject[fieldName].month}-01`
      );
    }

    return null;
  };

  const editGenericListMapEntry = (field, entry, idx) => {
    const key = `${field}-${entry}-${idx}`;

    const isEditing =
      key in isEditingFieldEntryIdxMap ? !isEditingFieldEntryIdxMap[key] : true;
    console.log(isEditing);
    setIsEditingFieldEntryIdxMap({
      ...isEditingFieldEntryIdxMap,
      [key]: isEditing,
    });

    if (!(key in genericFieldEntryIdxMap)) {
      setGenericEntryFieldIdxMap({
        ...genericFieldEntryIdxMap,
        [key]: entry,
      });
    } else {
      if (isEditing) {
        setGenericEntryFieldIdxMap({
          ...genericFieldEntryIdxMap,
          [key]: genericFieldEntryIdxMap[key],
        });
      } else {
        let tempGenericListMap = { ...genericListMap };
        let tempGenericListMapField = [...tempGenericListMap[field]];
        tempGenericListMapField[idx] = genericFieldEntryIdxMap[key];
        tempGenericListMap[field] = tempGenericListMapField;
        setGenericListMap(tempGenericListMap);

        const finalMap = { ...modalEntryObject, ...tempGenericListMap };
        updateInLocalStorage(finalMap);
      }
    }
  };

  const getGenericListMapField = (field, entry, idx) => {
    const key = `${field}-${entry}-${idx}`;
    if (key in genericFieldEntryIdxMap) {
      if (key in isEditingFieldEntryIdxMap) {
        return (
          <TextField
            value={genericFieldEntryIdxMap[key]}
            onChange={(e) => {
              setGenericEntryFieldIdxMap({
                ...genericFieldEntryIdxMap,
                [key]: e.target.value,
              });
            }}
          />
        );
      } else {
        return <ListItemText>{genericFieldEntryIdxMap[key]}</ListItemText>;
      }
    }

    return <ListItemText>{entry}</ListItemText>;
  };

  const getBtnName = (field, entry, idx) => {
    const key = `${field}-${entry}-${idx}`;

    if (key in isEditingFieldEntryIdxMap) {
      return "Save";
    } else {
      return "Edit";
    }
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
              value={getValue(field)}
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
              value={getValue(field)}
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
            value={getDateValue(field)}
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
                      {getGenericListMapField(field, entry, idx)}
                      <Button
                        variant="contained"
                        onClick={() => {
                          editGenericListMapEntry(field, entry, idx);
                        }}
                      >
                        {getBtnName(field, entry, idx)}
                      </Button>
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
      <Dialog open={openModal} onClose={cleanState}>
        <DialogTitle>Add a {fieldName}</DialogTitle>
        <DialogContent>
          {fieldGroups.map((group, idx) => {
            if (group.length > 1) {
              return (
                <div className="grid grid-cols-2 my-3 gap-4" key={idx}>
                  {group.map((element) => {
                    return fieldDOM[element];
                  })}
                </div>
              );
            } else {
              return <div key={idx}>{fieldDOM[group[0]]}</div>;
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
