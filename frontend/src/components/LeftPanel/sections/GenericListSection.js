import React, { useEffect, useState } from "react";
import GenericModal from "./modals/GenericListModal";
import { Button, IconButton } from "@mui/material";
import {
  Add,
  DeleteOutline,
  DriveFileRenameOutline,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { modes } from "../constants/modes";
import { deleteResumeArray } from "../../../reducers/resume-reducer";

const GenericSection = ({
  fieldsMap,
  fieldName,
  fieldIcon,
  modalHeading,
  fieldGroups,
  displayFieldTitle,
  displayFieldSubtitle,
  displayFieldExtraTitle,
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
    <div className="font-inter border-b border-slate-500 dark:border-slate-400 py-6">
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
              <div
                key={idx}
                className="border-b last:border-0 flex flex-row items-center justify-between p-3"
              >
                <div>
                  <h1 className="font-semibold">
                    {displayFieldExtraTitle
                      ? entryList[entry][displayFieldTitle] +
                        ", " +
                        entryList[entry][displayFieldExtraTitle]
                      : entryList[entry][displayFieldTitle]}
                  </h1>
                  <h2 className="text-xs opacity-75">
                    {entryList[entry][displayFieldSubtitle]}
                  </h2>
                </div>
                <div>
                  <IconButton
                    size="small"
                    onClick={() => {
                      handleEditClick(idx);
                    }}
                  >
                    <DriveFileRenameOutline sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => {
                      handleDeleteClick(idx);
                    }}
                  >
                    <DeleteOutline sx={{ fontSize: 18 }} />
                  </IconButton>
                </div>
              </div>
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
