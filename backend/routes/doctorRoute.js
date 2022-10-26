const express = require("express");
const {
  createDoctor,
  getAllDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = express.Router();

router.route("/doctor/new").post(verifyJWT, verifyAdmin, createDoctor);
router.route("/doctors").get(verifyJWT, verifyAdmin, getAllDoctor);
router.route("/doctor/:email").delete(verifyJWT, verifyAdmin, deleteDoctor);

module.exports = router;
