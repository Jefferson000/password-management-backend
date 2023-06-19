const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
const middleware = require("../common/midleware");
const constants = require('../config/constants');


router.get("/", userController.getUsers);

router.post(
  "/",
  middleware.validateRequest(["username", "email", "password"], constants.IS_BODY_REQ),
  userController.createUser
);


module.exports = router;
