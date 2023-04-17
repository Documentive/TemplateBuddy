import resumeModel from "./resume-model.js";

export const createEmptyResume = () => {
  return resumeModel.create({
    basics: {
      location: {
        address: "",
        postalCode: "",
        city: "",
        countryCode: "",
        region: "",
      },
    },
  });
};

export const getAllResumes = () => {
  return resumeModel.find();
};

export const updateSectionById = (id, section_name, value) => {
  let updateObj = {};
  updateObj[section_name] = value;

  return resumeModel.findByIdAndUpdate(id, updateObj, { new: true });
};
