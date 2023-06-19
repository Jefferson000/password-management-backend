const { getUsers, createUser } = require("../service/user");
const HttpStatus = require("http-status-codes");

module.exports.getUsers = (req, res) => {
  getUsers().then(
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

module.exports.createUser = (req, res) => {
  createUser(req.body).then(
    (result) => {
      res.status(HttpStatus.StatusCodes.CREATED)
      .json({ response: result });
    },
    (error) => {
      res.status(error.status || HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  );
};
