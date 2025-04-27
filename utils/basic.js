import { ENVIRONMENTS } from "../constant/basic.js";
import { infoLog } from "./logger.js";

export const getCurrentRunningEnvironment = () => {
  infoLog(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
  return process.env.NODE_ENV === ENVIRONMENTS.LOCAL
    ? ENVIRONMENTS.LOCAL
    : ENVIRONMENTS.DEVELOPMENT;
};

export const validateRequiredFields = (body, requiredFields) => {
  return new Promise((resolve, reject) => {
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      resolve(
        ServerSuccessResponse.successResponse(
          false,
          STATUS_CODE.BAD_REQUEST,
          STATUS_MESSAGES.ERROR,
          ERROR_MESSAGES.EMPTY_REQUIRED_FIELDS,
          { missingFields }
        )
      );
    } else {
      resolve(
        ServerSuccessResponse.successResponse(
          true,
          STATUS_CODE.OK,
          STATUS_MESSAGES.SUCCESS,
          SUCCESS_MESSAGES.OPERATION_SUCCESSFUL,
          null
        )
      );
    }
  });
};

export const generateFileId = () => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let fileId = "";

  let length = 5;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    fileId += charset.charAt(randomIndex);
  }

  return fileId;
};
