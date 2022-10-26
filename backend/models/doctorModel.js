const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Please Enter Number"],
  },
  address: {
    type: String,
    required: [true, "Please Enter address"],
  },
  specialty: {
    type: String,
    required: [true, "Please Enter specialty"],
  },
  image: {
    type: String,
    required: [true, "Please Enter image url"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
