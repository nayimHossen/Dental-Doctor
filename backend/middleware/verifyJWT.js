var jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({
      message: "un authorize access",
    });
  }
  const token = authHeader.split(` `)[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (error, decoded) {
    if (error) {
      return res.status(403).send({
        message: "forbiden access",
      });
    }
    req.decoded = decoded;
    next();
  });
}

module.exports = verifyJWT;
