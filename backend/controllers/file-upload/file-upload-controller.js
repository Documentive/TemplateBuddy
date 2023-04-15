import multer from "multer";
import fs from "fs";

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

const FileUploadController = (app) => {
  app.post("/upload/image", upload.single("image"), (_req, res) => {
    res.status(201).send({
      status: "Uploaded successfully",
    });
  });
};

export default FileUploadController;
