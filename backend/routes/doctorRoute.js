const express = require("express");
const { createDoctor } = require("../controllers/doctorController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = express.Router();

router.route("/doctor/new").post(verifyJWT, verifyAdmin, createDoctor);

module.exports = router;
