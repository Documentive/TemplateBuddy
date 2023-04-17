import * as resumeDao from "./resume-dao.js";

const getSingletonResume = async () => {
  let resumes = await resumeDao.getAllResumes();
  if (resumes.length === 0) {
    resumes = [await resumeDao.createEmptyResume()];
  }

  return resumes[0];
};

const putBasics = async (req, res) => {
  const { basics } = req.body;
  const resume = await getSingletonResume();
  const id = resume._id;
  const updatedResume = await resumeDao.updateBasicsById(id, basics);
  return res.status(201).json({ updatedResume });
};

const ResumeController = (app) => {
  app.put("/resume/basics", putBasics);
};

export default ResumeController;
