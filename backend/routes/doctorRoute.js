const express = require("express");
const { createDoctor } = require("../controllers/doctorController");

const router = express.Router();

router.route("/doctor/new").post(createDoctor);

module.exports = router;
