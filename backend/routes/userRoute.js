const express = require("express");
const {
  registerUser,
  getAllUsers,
  makeAdmin,
  getAdmin,
} = require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = express.Router();

router.route("/user/:email").put(registerUser);
router.route("/user/admin/:email").put(verifyJWT, verifyAdmin, makeAdmin);
router.route("/users").get(verifyJWT, getAllUsers);
router.route("/admin/:email").get(verifyJWT, getAdmin);

module.exports = router;
