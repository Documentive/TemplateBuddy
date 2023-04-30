import React, { useEffect, useState } from "react";
import GenericModal from "./modals/GenericListModal";
import { Button, ListItem, ListItemText } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { modes } from "../constants/modes";
import { deleteResumeArray } from "../../../reducers/resume-reducer";

const GenericSection = ({
  fieldsMap,
  fieldName,
  fieldIcon,
  modalHeading,
  fieldGroups,
  displayField,
  dbField,
}) => {
  const { resume, resumeLoading } = useSelector((state) => state.resume);
  let [openModal, setOpenModal] = useState(false);
  let [entryList, setEntryList] = useState([]);
  let [modalMode, setModalMode] = useState(modes.ADD);
  let [currentModalIdx, setCurrentModalIdx] = useState(-1);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!resumeLoading && resume !== null) {
      let arrayObj = resume[dbField[0]];
      for (let i = 1; i < dbField.length; i++) {
        arrayObj = arrayObj[dbField[i]];
      }
      let tempEntryList = [];
      arrayObj.map((entry) => {
        tempEntryList = [...tempEntryList, entry];
        return null;
      });
      setEntryList(tempEntryList);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume, resumeLoading]);

  const handleEditClick = (idx) => {
    setOpenModal(true);
    setCurrentModalIdx(idx);
    setModalMode(modes.EDIT);
  };

  const handleDeleteClick = (idx) => {
    let tempEntryList = [...entryList];
    tempEntryList.splice(idx, 1);
    setEntryList(tempEntryList);

    dispatch(
      deleteResumeArray({
        sectionKeys: dbField,
        idx: idx,
      })
    );
  };

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2 opacity-50">{fieldIcon}</div>
        <p className="text-3xl" id={dbField[dbField.length - 1]}>
          {fieldName}
        </p>
      </div>
      <GenericModal
        fieldsMap={fieldsMap}
        openModal={openModal}
        setOpenModal={setOpenModal}
        entryList={entryList}
        setEntryList={setEntryList}
        fieldName={fieldName}
        modalHeading={modalHeading}
        dbField={dbField}
        fieldGroups={fieldGroups}
        modalMode={modalMode}
        setModalMode={setModalMode}
        currentModalIdx={currentModalIdx}
      />
      <div className="rounded-xl border mb-2">
        {Object.keys(entryList).length === 0 && (
          <div className="py-8 text-center">Nothing added yet!</div>
        )}

        {Object.keys(entryList).length > 0 &&
          Object.keys(entryList).map((entry, idx) => {
              return (
                <ListItem key={idx} className="border-b last:border-0">
                  <ListItemText>{entryList[entry][displayField]}</ListItemText>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      handleEditClick(idx);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      handleDeleteClick(idx);
                    }}
                  >
                    Delete
                  </Button>
                </ListItem>
              );
            })}
      </div>
      <div className="text-right">
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add New {modalHeading}
        </Button>
      </div>
    </div>
  );
};

export default GenericSection;
