const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const middleware = require("../common/midleware");
const constants = require('../config/constants');

router.post(
  "/",
  middleware.validateRequest(["username", "password"], !constants.IS_BODY_REQ),
  authController.auth
);


module.exports = router;
