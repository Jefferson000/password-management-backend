var express = require("express");
//var HttpStatus = require('http-status-codes');
const passwordController = require("../controllers/password");
const middleware = require("../common/midleware");
const constants = require('../config/constants');

var router = express.Router();

router.get(
  "/",
  middleware.validateRequest(["user_id"], !constants.IS_BODY_REQ),
  middleware.validateToken,
  passwordController.getPasswords
);

module.exports = router;
