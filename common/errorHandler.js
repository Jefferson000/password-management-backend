const errorMessages = require("./errorMesages");

module.exports.errorHandler = (error) => {
  if (error.code) {
    //log an error from database with the logger
    return { message: `Database Error: ${error.sqlMessage}`, status: 500 };
  } else if (error.errno) {
    const errorCode = error.errno;
    if (errorMessages[errorCode]) {
      return errorMessages[errorCode];
    } else {
      return { message: `Unknown Error: ${errorCode}`, status: 500 };
    }
  }
};
