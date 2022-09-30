//create token and save cookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  //potions for cookie
  const options = {
    expires: new Date(
      Date.now + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
