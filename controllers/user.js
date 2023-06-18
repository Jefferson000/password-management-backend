const { getUsers } = require("../service/user");
const HttpStatus = require("http-status-codes");

module.exports.getUsers = (req, res) => {
  getUsers().then(
    (result) => {
      res.status(HttpStatus.StatusCodes.OK).json({ response: result });
    },
    (error) => {
      res
        .status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ err: error });
    }
  );
};
