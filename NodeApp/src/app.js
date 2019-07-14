const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const feedRouter = require('./routes/feedsRoutes');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const customHeader = require('./middlewares/customHeaderMiddleware');
const app = express();

/**
 * To parse json payload
 */
app.use(bodyParser.json());

app.use(customHeader); // Adding custome headers
app.use('/api', feedRouter); // api end point
app.use(errorHandlerMiddleware); // Handle all application errors

module.exports = app;
