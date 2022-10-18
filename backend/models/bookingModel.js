const mongoose = require("mongoose");

// const booking = {
//   treatmentId: _id,
//   treatment: name,
//   date: formatedDate,
//   slot,
//   patient: user.email,
//   patientName: user.displayName,
//   phone: phone,
// };

const bookingSchema = new mongoose.Schema({
  treatmentName: {
    type: String,
    required: [true, "Please Enter treatment Name"],
  },
  treatmentId: {
    type: String,
    required: [true, "Please Enter treatment id"],
  },
  appointmentDate: {
    type: Date,
    required: [true, "Please appointment date"],
  },
  timeSlot: {
    type: String,
    required: [true, "Please select appointment slot"],
  },

  patientEmail: {
    type: String,
    required: [true, "Please Enter patient email"],
  },
  patientName: {
    type: String,
    required: [true, "Please Enter patient name"],
  },
  patientPhone: {
    type: Number,
    required: [true, "please enter phone number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
