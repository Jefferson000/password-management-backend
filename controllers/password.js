const { getPasswords } = require("../service/password");
const HttpStatus = require("http-status-codes");

module.exports.getPasswords = (req, res) => {
  console.log(req.query)
  const query = req.query;
  getPasswords(query.user_id).then(
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
