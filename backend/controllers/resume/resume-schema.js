import mongoose from "mongoose";

const MonthYearDate = new mongoose.Schema({
  month: String,
  year: String,
});

const Education = new mongoose.Schema({
  name: String,
  location: String,
  degree: String,
  from: MonthYearDate,
  to: MonthYearDate,
  expected_graduation: MonthYearDate,
  details: String,
  score: String,
});

const TechnicalSkills = new mongoose.Schema({
  header: String,
  skills: [String],
});

const WorkExperience = new mongoose.Schema({
  name: String,
  location: String,
  role: String,
  from: MonthYearDate,
  to: MonthYearDate,
  details: String,
});

const Projects = new mongoose.Schema({
  name: String,
  github_url: String,
  from: MonthYearDate,
  to: MonthYearDate,
  details: String,
});

const resume_schema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email_id: String,
    linkedin_url: String,
    github_url: String,
    location: String,
    phone: String,
    education: [Education],
    technical_skills: [TechnicalSkills],
    work_experience: [WorkExperience],
    projects: [Projects],
  },
  {
    collection: "resume",
  }
);

export default resume_schema;
