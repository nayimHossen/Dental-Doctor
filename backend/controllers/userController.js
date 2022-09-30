const ErrorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");

//REGISTER USER
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is sample",
      url: "profile image",
    },
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
  });
});
