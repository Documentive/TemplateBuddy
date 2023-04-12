import mongoose from "mongoose";

import resume_schema from "./resume-schema.js";

const resume_model = mongoose.model("ResumeModel", resume_schema);
export default resume_model;
