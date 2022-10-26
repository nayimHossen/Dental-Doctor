const Doctor = require("../models/doctorModel");
const ErrorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

//CREATE SERVICES -- ADMIN
exports.createDoctor = catchAsyncError(async (req, res, next) => {
  const doctor = await Doctor.create(req.body);

  res.status(201).json({
    success: true,
    doctor,
  });
});
