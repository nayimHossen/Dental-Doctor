const express = require("express");
const {
  saveBooking,
  getBookings,
} = require("../controllers/bookingController");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();

router.route("/booking/new").post(saveBooking);
router.route("/bookings").get(verifyJWT, getBookings);

module.exports = router;
