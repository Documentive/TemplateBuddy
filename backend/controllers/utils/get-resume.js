import * as resumeDao from "../resume/resume-dao.js";

export const getSingletonResume = async () => {
  let resumes = await resumeDao.getAllResumes();
  if (resumes.length === 0) {
    resumes = [await resumeDao.createEmptyResume()];
  }

  return resumes[0];
};
