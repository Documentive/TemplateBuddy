import resumeModel from "./resume-model.js";

export const createEmptyResume = () => {
  return resumeModel.create({ basics: {} });
};

export const getAllResumes = () => {
  return resumeModel.find();
};

export const updateBasicsById = (id, basics) => {
  return resumeModel.findByIdAndUpdate(
    id,
    {
      basics,
    },
    { new: true }
  );
};
