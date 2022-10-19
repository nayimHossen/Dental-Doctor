const express = require("express");
const {
  saveBooking,
  getBookings,
} = require("../controllers/bookingController");

const router = express.Router();

router.route("/booking/new").post(saveBooking);
router.route("/bookings").get(getBookings);

module.exports = router;
