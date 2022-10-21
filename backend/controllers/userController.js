const User = require("../models/userModel");
const ErrorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const jwt = require("jsonwebtoken");

//SAVE A USER
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const email = req.params.email;
  const userInfo = req.body;

  const filter = { email: email };
  const options = { upsert: true };
  const updateDoc = {
    $set: userInfo,
  };

  const user = await User.updateOne(filter, updateDoc, options);
  const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(200).json({
    success: true,
    user,
    token,
  });
});

//MAKE AN ADMIN
exports.makeAdmin = catchAsyncError(async (req, res, next) => {
  const email = req.params.email;

  const requester = req.decoded.email;
  const requesterAccount = await User.findOne({ email: requester });
  if (requesterAccount.role === "admin") {
    const filter = { email: email };
    const options = { upsert: true };
    const updateDoc = {
      $set: { role: "admin" },
    };

    const result = await User.updateOne(filter, updateDoc, options);

    res.status(200).json({
      success: true,
      result,
    });
  } else {
    res.status(403).json({
      success: false,
      message: "forbidden",
    });
  }
});

//GET ALL USER
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const user = await User.find();

  res.status(200).json({
    success: true,
    user,
  });
});

//GET ADMIN
exports.getAdmin = catchAsyncError(async (req, res, next) => {
  const email = req.params.email;
  const user = await User.findOne({ email: email });
  const isAdmin = user.role === "admin";

  res.status(200).json({
    success: true,
    admin: isAdmin,
  });
});

// exports.updateProduct = catchAsyncError(async (req, res, next) => {
//   let product = await Product.findById(req.params.id);

//   if (!product) {
//     return next(new ErrorHandler("Product not found", 404));
//   }

//   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });
