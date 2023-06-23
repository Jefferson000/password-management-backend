const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
const middleware = require("../common/midleware");
const constants = require('../config/constants');


router.get("/", middleware.validateToken, userController.getUsers);

router.post(
  "/",
  middleware.validateRequest(["username", "email", "password"], constants.IS_BODY_REQ),
  userController.createUser
);

router.put(
  "/",
  middleware.validateRequest(["username", "email", "password"], constants.IS_BODY_REQ),
  middleware.validateRequest(["user_id"], !constants.IS_BODY_REQ),
  userController.editUser
);



module.exports = router;
