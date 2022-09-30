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

// LOGIN USER
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  //checking user has given email and password
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email and password"));
  }

  const isPasswordMatched = user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email and password"));
  }

  const token = user.getJWTToken();

  res.status(200).json({
    success: true,
    token,
  });
});
