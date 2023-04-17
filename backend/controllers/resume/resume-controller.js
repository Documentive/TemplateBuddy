import * as resumeDao from "./resume-dao.js";

const getSingletonResume = async () => {
  let resumes = await resumeDao.getAllResumes();
  if (resumes.length === 0) {
    resumes = [await resumeDao.createEmptyResume()];
  }

  return resumes[0];
};

const putSection = async (req, res) => {
  const { section_name } = req.params;
  const { section } = req.body;
  const resume = await getSingletonResume();
  const id = resume._id;
  const updatedResume = await resumeDao.updateSectionById(
    id,
    section_name,
    section[section_name]
  );
  return res.status(201).json({ updatedResume });
};

const ResumeController = (app) => {
  app.put("/resume/:section_name", putSection);
};

export default ResumeController;
