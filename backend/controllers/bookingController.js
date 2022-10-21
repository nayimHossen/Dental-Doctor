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

//GET BOOKING FOR INDEVGUL USER
exports.getBookings = catchAsyncError(async (req, res, next) => {
  const patient = req.query.patient;
  const decodedEmail = req.decoded.email;

  if (patient === decodedEmail) {
    const bookings = await Booking.find({ patientEmail: patient });

    return res.status(200).json({
      success: true,
      bookings,
    });
  } else {
    return res.status(403).json({
      success: false,
      message: "forbidden access",
    });
  }
});
