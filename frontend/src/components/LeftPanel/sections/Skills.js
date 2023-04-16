import { ShapeLine } from "@mui/icons-material";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import SkillsKeywordModal from "./modals/SkillsKeywordModal";

const Skills = () => {
  let [skills, setSkills] = useState([]);
  let [openSkillsModal, setOpenSkillsModal] = useState(false);

  return (
    <div>
      <div className="flex w-full items-center gap-3 mb-4">
        <div className="ml-2">
          <ShapeLine />
        </div>
        <p className="text-3xl">Skills</p>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setOpenSkillsModal(true);
        }}
      >
        Add Skill
      </Button>
      <SkillsKeywordModal
        skills={skills}
        setSkills={setSkills}
        openSkillsModal={openSkillsModal}
        setOpenSkillsModal={setOpenSkillsModal}
      />

      {skills.length > 0 && (
        <>
          {/* <div>Keywords list:</div> */}
          <List>
            {skills.map((skill, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemText>{skill}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </>
      )}

      {skills.length === 0 && <div>No skills added yet</div>}
    </div>
  );
};

export default Skills;
