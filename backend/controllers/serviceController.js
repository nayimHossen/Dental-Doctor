const Service = require("../models/serviceModel");
const Booking = require("../models/bookingModel");
const ErrorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

//CREATE SERVICES -- ADMIN
exports.createService = catchAsyncError(async (req, res, next) => {
  const service = await Service.create(req.body);

  res.status(201).json({
    success: true,
    service,
  });
});

//GET ALL SERVICES
exports.getAllServices = catchAsyncError(async (req, res, next) => {
  const serviceCount = await Service.countDocuments();

  const services = await Service.find();

  res.status(200).json({
    success: true,
    services,
    serviceCount,
  });
});

//GET AVAILABLE SERVICES
exports.getAvailableServices = catchAsyncError(async (req, res, next) => {
  const date = req.query.date;

  const services = await Service.find();

  const bookings = await Booking.find({ appointmentDate: date });

  services.forEach((service) => {
    const serviceBookings = bookings.filter(
      (book) => book.treatmentName === service.name
    );
    const bookedSlots = serviceBookings.map((book) => book.timeSlot);
    const available = service.slots.filter(
      (slot) => !bookedSlots.includes(slot)
    );
    service.slots = available;
  });

  return res.status(200).json({
    success: true,
    services,
  });
});

//GET SERVICES details
exports.getServiceDetail = catchAsyncError(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorHandler("Service not found", 404));
  }

  res.status(200).json({
    success: true,
    service,
  });
});

//UPDATE SERVICES -- ADMIN
exports.updateService = catchAsyncError(async (req, res, next) => {
  let service = await Product.findById(req.params.id);

  if (!service) {
    return next(new ErrorHandler("Service not found", 404));
  }

  service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    service,
  });
});

//DELETE SERVICES -- ADMIN
exports.deleteService = catchAsyncError(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorHandler("service not found", 404));
  }

  await service.remove();

  res.status(200).json({
    success: true,
    message: "service deleted successfully",
  });
});
