var HttpStatus = require("http-status-codes");

exports.validateRequest = (fields, bodyRequired) => {
  return (req, res, next) => {
    if (fields.length != 0) {
      if (bodyRequired && req.body == {}) {
        return res
          .status(HttpStatus.StatusCodes.BAD_REQUEST)
          .json({ err: { code: "Body Requiered" } });
      } else if (!bodyRequired && req.query == {}) {
        return res
          .status(HttpStatus.StatusCodes.BAD_REQUEST)
          .json({ err: { code: "Query Required" } });
      }
      var request = bodyRequired ? req.body : req.query;
      for (const field of fields) {
        if (!request[field] && request[field] != 0) {
          return res
            .status(HttpStatus.StatusCodes.BAD_REQUEST)
            .json({ err: { code: `Missign param '${field}'` } });
        }
      }
      return next();
    }
    return next();
  };
};
