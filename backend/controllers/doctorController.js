const Doctor = require("../models/doctorModel");
const ErrorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

//CREATE DOCTOR -- ADMIN
exports.createDoctor = catchAsyncError(async (req, res, next) => {
  const doctor = await Doctor.create(req.body);

  res.status(201).json({
    success: true,
    doctor,
  });
});

//GET ALL DOCTORS
exports.getAllDoctor = catchAsyncError(async (req, res, next) => {
  const doctors = await Doctor.find();

  res.status(200).json({
    success: true,
    doctors,
  });
});

//DELETE DOCTOR -- ADMIN
exports.deleteDoctor = catchAsyncError(async (req, res, next) => {
  const email = req.params.email;
  const doctor = await Doctor.findOne({ email: email });

  if (!doctor) {
    return next(new ErrorHandler("Doctor not found", 404));
  }

  await doctor.remove();

  res.status(200).json({
    success: true,
    message: "doctor deleted successfully",
  });
});
