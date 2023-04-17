import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import HealthController from "./controllers/health/health-controller.js";

import FileUploadController from "./controllers/file-upload/file-upload-controller.js";
import file_utils from "./utils/file-utils.js";

import ResumeController from "./controllers/resume/resume-controller.js";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/TemplateBuddy";
mongoose.connect(CONNECTION_STRING);

const cors_options = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const app = express();
app.use(cors(cors_options));
app.use(express.json());
app.use("/images", express.static(file_utils.TEMPLATE_BUDDY_DIR));

HealthController(app);
FileUploadController(app);
ResumeController(app);

app.listen(process.env.PORT || 4000);
