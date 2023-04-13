import mongoose from "mongoose";

const MonthYearDate = new mongoose.Schema({
  month: String,
  year: String,
});

const Location = new mongoose.Schema({
  address: String,
  postalCode: String,
  city: String,
  countryCode: String,
  region: String,
});

const Profile = new mongoose.Schema({
  network: String,
  username: String,
  url: String,
});

const Basics = new mongoose.Schema({
  name: String,
  label: String,
  image: String,
  email: String,
  phone: String,
  url: String,
  summary: String,
  location: Location,
  profiles: [Profile],
});

const Work = new mongoose.Schema({
  name: String,
  position: String,
  url: String,
  startDate: MonthYearDate,
  endDate: MonthYearDate,
  summary: [String],
  highlights: [String],
});

const Volunteer = new mongoose.Schema({
  organization: String,
  position: String,
  url: String,
  startDate: MonthYearDate,
  endDate: MonthYearDate,
  summary: [String],
  highlights: [String],
});

const Education = new mongoose.Schema({
  institution: String,
  url: String,
  area: String,
  studyType: String,
  startDate: MonthYearDate,
  endDate: MonthYearDate,
  score: String,
  courses: [String],
});

const Award = new mongoose.Schema({
  title: String,
  date: MonthYearDate,
  awarder: String,
  summary: String,
});

const Certificate = new mongoose.Schema({
  name: String,
  date: MonthYearDate,
  issuer: String,
  url: String,
});

const Publication = new mongoose.Schema({
  name: String,
  publisher: String,
  releaseDate: MonthYearDate,
  url: String,
  summary: String,
});

const Skill = new mongoose.Schema({
  name: String,
  level: String,
  keywords: [String],
});

const Language = new mongoose.Schema({
  language: String,
  fluency: String,
});

const Interest = new mongoose.Schema({
  name: String,
  keywords: [String],
});

const Reference = new mongoose.Schema({
  name: String,
  reference: String,
});

const Project = new mongoose.Schema({
  name: String,
  description: String,
  highlights: [String],
  keywords: [String],
  startDate: MonthYearDate,
  endDate: MonthYearDate,
  url: String,
  roles: [String],
  entity: String,
  type: String,
});

const resume_schema = new mongoose.Schema(
  {
    basics: Basics,
    work: [Work],
    volunteer: [Volunteer],
    education: [Education],
    awards: [Award],
    certificates: [Certificate],
    publications: [Publication],
    skills: [Skill],
    languages: [Language],
    interests: [Interest],
    references: [Reference],
    projects: [Project],
  },
  { collection: "resume" }
);

export default resume_schema;
