import multer from "multer";
import fs from "fs";
import path from "path";

import file_utils from "../../utils/file-utils.js";
import * as resumeUtils from "../utils/get-resume.js";
import * as resumeDao from "../resume/resume-dao.js";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    if (!fs.existsSync(file_utils.TEMPLATE_BUDDY_DIR)) {
      fs.mkdirSync(file_utils.TEMPLATE_BUDDY_DIR);
    }
    cb(null, file_utils.TEMPLATE_BUDDY_DIR);
  },

  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadImage = async (req, res, logger) => {
  logger.info("POST /upload/image");
  let resume = await resumeUtils.getSingletonResume();
  resume.basics.image = path.join("/images", req.file.filename);
  const basicsSection = resume.basics;
  const id = resume._id;
  await resumeDao.updateSectionById(id, "basics", basicsSection);

  res.status(201).send({
    status: "Uploaded successfully",
    path: path.join("/images", req.file.filename),
  });
};

const FileUploadController = (app, logger) => {
  app.post("/upload/image", upload.single("image"), (req, res) =>
    uploadImage(req, res, logger)
  );
};

export default FileUploadController;
