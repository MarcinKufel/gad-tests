import { STORAGE_STATE } from "../playwright.config";
import * as fs from "fs";

async function globalSetup(): Promise<void> {
  if (fs.existsSync(STORAGE_STATE)) {
    fs.unlinkSync(STORAGE_STATE);
  }
  //  console.log("⚠️  URL:", process.env.BASE_URL);
  //  console.log("⚠️  User:", process.env.USER_EMAIL);
}

export default globalSetup;
