var express = require('express');
var router = express.Router();
//var HttpStatus = require('http-status-codes');
const passwordController = require('../controllers/password');

router.get("/", passwordController.createPassword);
module.exports = router;