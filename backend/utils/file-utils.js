import os from "os";
import path from "path";

const HOME_DIR = os.homedir();
const TEMPLATE_BUDDY_DIR = path.join(HOME_DIR, ".template-buddy");

export default {
  HOME_DIR,
  TEMPLATE_BUDDY_DIR,
};
