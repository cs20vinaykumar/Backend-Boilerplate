import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import ServerErrorResponse from "../../utils/classes/ServerErrorResponse.js";
import { generateFileId } from "../../utils/basic.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "../..", "public/uploads/assets");

    // Log the upload directory path
    console.log("Upload Directory Path: ", uploadDir);

    // Check if the directory exists, if not create it
    if (!fs.existsSync(uploadDir)) {
      console.log("Directory doesn't exist. Creating new directory.");
      fs.mkdirSync(uploadDir, {
        recursive: true,
      });
    } else {
      console.log("Directory already exists.");
    }

    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    // Log the file information
    console.log("Received file: ", file.originalname);

    // Get the current date and generate formatted file name
    var currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const originalFilename = path
      .parse(file.originalname)
      .name.replace(/\s/g, "_");
    const uniqueID = generateFileId();

    // Log the generated unique ID
    console.log("Generated unique file ID: ", uniqueID);

    let fileExt = path.extname(file.originalname).toLowerCase();
    const filename = `${formattedDate}-${uniqueID}-${originalFilename}${fileExt}`;

    // Log the final file name to be saved
    console.log("Final filename: ", filename);

    cb(null, filename);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    console.log("File MIME type: ", file.mimetype);

    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      console.log("File type is valid. Proceeding with upload.");
      callback(null, true);
    } else {
      console.log("Invalid file type detected. Rejecting file.");
      const errorResponse = new ServerErrorResponse(
        false,
        400,
        "FAILED",
        "Not an image file! Please upload only image files.",
        null
      );
      return callback(errorResponse, false);
    }
  },
});

export default upload;
