const express = require("express");
const { saveBooking } = require("../controllers/bookingController");

const router = express.Router();

router.route("/booking/new").post(saveBooking);

module.exports = router;
