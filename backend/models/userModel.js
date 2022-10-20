const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  // password: {
  //   type: String,
  //   required: [true, "Please Enter Your Password"],
  //   minLength: [6, "Password should be greater than 6 characters"],
  //   select: false,
  // },
  // role: {
  //   type: String,
  //   default: "user",
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("User", userSchema);
