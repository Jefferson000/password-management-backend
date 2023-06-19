const errorMessages = require("./errorMesages");

module.exports.errorHandler = (error) => {
  console.log(errorMessages);
  if (error.code) {
    return {message: error.code, status: 500};
  } else if (error.errno) {
    const errorCode = error.errno;
    if(errorMessages[errorCode]){
        return errorMessages[errorCode];
    } else{
        // console.log(error)
        return  {message: `Unknown Error: ${errorCode}`, status: 500};
    }
  }
};
