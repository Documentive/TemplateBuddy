import multer from "multer";
import fs from "fs";
import path from "path";

import file_utils from "../../utils/file-utils.js";

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

const FileUploadController = (app, logger) => {
  app.post("/upload/image", upload.single("image"), (req, res) => {
    logger.info("POST /upload/image");
    res.status(201).send({
      status: "Uploaded successfully",
      path: path.join("/images", req.file.filename),
    });
  });
};

export default FileUploadController;
