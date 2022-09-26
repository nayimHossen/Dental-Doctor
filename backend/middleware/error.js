const ErrorHandler = require("../utlis/errorHandler");

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server Error";

  // WRONG MONGODB ID (Cast to ObjectId faile)
  if (error.name === "CastError") {
    const message = `Resource not found. InvalId: ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
