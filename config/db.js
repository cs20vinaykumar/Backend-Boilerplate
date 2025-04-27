import mongoose from "mongoose";
import { getCurrentRunningEnvironment } from "../utils/basic.js";
import { ENVIRONMENTS } from "../constant/basic.js";
import { errorLog, successLog } from "../utils/logger.js";

export const connectToMongoDb = async () => {
  try {
    const currentEnviromenmt = getCurrentRunningEnvironment();
    const uri =
      currentEnviromenmt === ENVIRONMENTS.LOCAL
        ? process.env.MONGO_DB_URI_LOC
        : process.env.MONGO_DB_URI_DEV;

    await mongoose.connect(uri);
    successLog(
      `Connected to MongoDB Successfully - ${getCurrentRunningEnvironment()}`
    );
  } catch (error) {
    errorLog("Connection error", error);
  }
};
