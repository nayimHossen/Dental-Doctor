const User = require("../models/userModel.js");

const verifyAdmin = async (req, res, next) => {
  const requester = req.decoded.email;
  const requesterAccount = await User.findOne({ email: requester });

  if (requesterAccount.role === "admin") {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "forbidden",
    });
  }
};

module.exports = verifyAdmin;
