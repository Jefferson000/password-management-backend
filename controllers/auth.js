const { auth } = require("../service/auth");
const HttpStatus = require("http-status-codes");

module.exports.auth = (req, res) => {
  auth(req.query).then(
    (result) => {
      res.status(HttpStatus.StatusCodes.OK)
        .json({ response: result });
    },
    (error) => {
        console.log(error)
      res.status(error.status || HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  );
};