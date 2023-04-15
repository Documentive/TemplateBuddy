import express from "express";
import cors from "cors";

import HealthController from "./controllers/health/health-controller.js";
import FileUploadController from "./controllers/file-upload/file-upload-controller.js";

const cors_options = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const app = express();
app.use(cors(cors_options));
app.use(express.json());

HealthController(app);
FileUploadController(app);

app.listen(process.env.PORT || 4000);
