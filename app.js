var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

const logger = require('./config/logger');

//Routes:
var indexRouter = require('./routes/index');
var passwordRoute = require('./routes/password');
// var authController = require('./routes/auth')

const app = express();


// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Error handling middleware
    app.use((err, req, res, next) => {
    // Set an appropriate status code based on the error
    const statusCode = err.status || 500;

    // Set the response body
    const responseBody = {
        status: 'error',
        message: err.message || 'Internal Server Error',
    };

    // Send the error response
    res.status(statusCode).json(responseBody);
    logger.error(responseBody.message)
    });

//Routes
app.use('/', indexRouter);
app.use('/password', passwordRoute);
//app.use('/auth',authController);
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
module.exports = app;