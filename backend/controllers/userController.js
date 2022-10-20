const User = require("../models/userModel");
const ErrorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const jwt = require("jsonwebtoken");

//SAVE A USER
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const email = req.params.email;
  const userInfo = req.body;
  console.log(email, req.body);

  const filter = { email: email };
  const options = { upsert: true };
  const updateDoc = {
    $set: userInfo,
  };

  const user = await User.updateOne(filter, updateDoc, options);
  const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    success: true,
    user,
    token,
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
