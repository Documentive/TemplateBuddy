import * as resumeDao from "./resume-dao.js";

const getSingletonResume = async () => {
  let resumes = await resumeDao.getAllResumes();
  if (resumes.length === 0) {
    resumes = [await resumeDao.createEmptyResume()];
  }

  return resumes[0];
};

const putSection = async (req, res, logger) => {
  const { section_name } = req.params;
  logger.info(`PUT /resume/${section_name}`);

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

const getResume = async (_req, res, logger) => {
  logger.info("GET /resume");
  const resume = await getSingletonResume();
  return res.status(200).json({ resume });
};

const ResumeController = (app, logger) => {
  app.put("/resume/:section_name", (req, res) => putSection(req, res, logger));
  app.get("/resume", (req, res) => getResume(req, res, logger));
};

export default ResumeController;
