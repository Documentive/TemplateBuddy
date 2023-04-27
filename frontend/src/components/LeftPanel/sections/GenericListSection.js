import React, { useEffect, useState } from "react";
import GenericModal from "./modals/GenericListModal";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { modes } from "../constants/modes";
import { Add } from "@mui/icons-material";

const GenericSection = ({
  fieldsMap,
  fieldName,
  fieldIcon,
  fieldGroups,
  displayField,
  dbField,
}) => {
  const { resume, resumeLoading } = useSelector((state) => state.resume);
  let [openModal, setOpenModal] = useState(false);
  let [entryList, setEntryList] = useState([]);
  let [modalMode, setModalMode] = useState(modes.ADD);
  let [currentModalIdx, setCurrentModalIdx] = useState(-1);

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

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">{fieldIcon}</div>
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
          Add New {fieldName}
        </Button>
      </div>
    </div>
  );
};

export default GenericSection;
