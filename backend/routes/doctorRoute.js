const express = require("express");
const { createDoctor } = require("../controllers/doctorController");

const router = express.Router();

router.route("/addDoctor").get(createDoctor);

module.exports = router;
