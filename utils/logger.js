import { info, success, error, warning, debug } from "../constant/chalk.js";

export const infoLog = (message = "", ...variables) => {
  console.log(info(`[INFO]: ${message}`), ...variables);
};

export const successLog = (message = "", ...variables) => {
  console.log(success(`[SUCCESS]: ${message}`), ...variables);
};

export const warningLog = (message = "", ...variables) => {
  console.log(warning(`[WARNING]: ${message}`), ...variables);
};

export const errorLog = (message = "", ...variables) => {
  console.log(error(`[ERROR]: ${message}`), ...variables);
};

export const debugLog = (message = "", ...variables) => {
  console.log(debug(`[DEBUG]: ${message}`), ...variables);
};
