const Booking = require("../models/bookingModel");
const ErrorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

//SAVE A BOOKING
exports.saveBooking = catchAsyncError(async (req, res, next) => {
  const bookingData = req.body;

  const query = {
    treatmentName: bookingData.treatmentName,
    appointmentDate: bookingData.appointmentDate,
    patientEmail: bookingData.patientEmail,
  };
  const exists = await Booking.findOne(query);

  if (exists) {
    return res.status(404).json({
      success: false,
      booking: exists,
    });
  }
  const booking = await Booking.create(req.body);

  res.status(201).json({
    success: true,
    booking,
  });
});
