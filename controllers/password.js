const { getPasswords } = require("../service/password");
const HttpStatus = require("http-status-codes");

module.exports.getPasswords = (req, res) => {
  const userId = req.params.user_id;
  getPasswords(userId).then(
    (result) => {
      res.status(result.length === 0 ? HttpStatus.StatusCodes.NO_CONTENT : HttpStatus.StatusCodes.OK)
        .json({ response: result });
    },
    (error) => {
      res.status(error.status || HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  );
};
