export const ERROR_MESSAGES = {
  // **Basic Authentication Errors**
  EMAIL_REQUIRED: "Email address is required.",
  PASSWORD_REQUIRED: "Password is required.",
  INVALID_EMAIL:
    "The email address provided is not valid. Please enter a valid email address.",
  INVALID_PASSWORD:
    "Password must contain at least 8 characters, including uppercase and lowercase letters, one digit, and one special character (@$!%*?&).",
  PASSWORDS_DO_NOT_MATCH: "Passwords do not match.",
  INVALID_LOGIN_CREDENTIALS: "Email or Password is incorrect.",
  USER_ALREADY_EXISTS: "User already exists.",
  SUPER_ADMIN_NOT_FOUND: "Super admin not found!",

  // **JWT & Authorization Errors**
  INVALID_JWT: "Invalid token! Please login again.",
  EXPIRED_JWT: "Your token has expired! Please login again.",
  UNAUTHORIZE: "You are not authorized to perform this action.",
  ENDPOINT_ACCESS_DENIED: (userType) =>
    `Forbidden! Only ${userType}s are allowed.`,
  INACTIVE_ACCOUNT: "Your account is deactivated, please contact your admin.",
  BANNED:
    "You have violated our Privacy Policy & Terms. For further information, please contact our Customer Support Center.",

  // **General Errors**
  INVALID_INPUT: "Invalid input for isActive.",
  NOT_FOUND: "Not Found.",
  EMPTY_REQUIRED_FIELDS: "Required fields are empty.",
  ICON_NOT_FOUND: "Icon not found.",
  MISSING_REQUIRED_FIELDS:
    "Missing required fields. Please fill in all necessary information.",
  INVALID_DATA:
    "Invalid data. Please ensure all fields are filled out correctly.",
  FIELD_REQUIRED: (fieldName) => `${fieldName} is required.`,
};

export const UNAUTHORIZE_MESSAGES = {
  USER_NOT_FOUND: "No user found with this email address.",
  USER_ALREADY_EXISTS: "User already exists with this email address.",
  NOT_LOGGED_IN: "You are not logged in. Please log in to gain access.",
  INCORRECT_PASSWORD: "Incorrect password.",
  OTP_EXPIRED: "OTP has expired.",
  OTP_INVALID: "OTP is invalid.",
  INVALID_JWT: "Invalid token! Please login again.",
  EXPIRED_JWT: "Your token has expired! Please login again.",
  INVALID_EXPIRED: "Token is invalid or has expired.",
  INACTIVE_ACCOUNT: "Your account is deactivated. Please contact your admin.",
  BANNED:
    "You have violated our Privacy Policy & Terms. Contact Customer Support for further information.",
  ENDPOINT_ACCESS_DENIED: (userType) =>
    `Forbidden! Only ${userType}s are allowed.`,
  UNAUTHORIZED_ACCESS: "Unauthorized access. Please login and try again.",
  FORBIDDEN: "Access denied. You don't have permission to perform this action.",
};

export default { ERROR_MESSAGES, UNAUTHORIZE_MESSAGES };
