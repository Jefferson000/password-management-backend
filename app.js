const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors');

// logger
const logger = require("./common/logger");

//Routes:
var indexRouter = require("./routes/index");
var passwordRouter = require("./routes/password");
var userRouter = require("./routes/user");
var authRouter = require("./routes/auth");

const app = express();

// app configs
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Error handling middleware
app.use((err, req, res, next) => {
  // Set an appropriate status code based on the error
  console.log("Err in general error midleware");
  const statusCode = err.status || 500;

  // Set the response body
  const responseBody = {
    status: "error",
    message: err.message || "Internal Server Error",
  };

  // Send the error response
  res.status(statusCode).json(responseBody);
  logger.error(responseBody.message);
});


//Routes
app.use("/", indexRouter);
app.use("/password", passwordRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
//app.use('/auth',authController);
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
module.exports = app;
