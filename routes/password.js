var express = require("express");
//var HttpStatus = require('http-status-codes');
const passwordController = require("../controllers/password");

var router = express.Router();

router.get("/", passwordController.createPassword);
module.exports = router;
