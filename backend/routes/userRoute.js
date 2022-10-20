const express = require("express");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

router.route("/user/:email").put(registerUser);

module.exports = router;
