/**
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function errorHandlerMiddleware (err, req, res, next) {

    if (res.headersSent) {
      return next(err)
    }
    res.status(err.errorCode).json({
      statusCode: err.errorCode,
      msg: err.errorMsg
    });
    return;
  }

  module.exports = errorHandlerMiddleware 