const express = require("express");
const userController = require("../controllers/user");
const passwordController = require("../controllers/password");
const router = express.Router();
const middleware = require("../common/middleware");
const constants = require('../config/constants');

router.post(
  "/",
  middleware.validateRequest(["username", "email", "password"], constants.IS_BODY_REQ),
  userController.createUser
);

router.put(
  "/:user_id",
  middleware.validateRequest(["username", "email", "password"], constants.IS_BODY_REQ),
  middleware.validateToken,
  userController.editUser
);

router.get(
  "/:user_id/password",
  middleware.validateToken,
  passwordController.getPasswords
);

module.exports = router;
