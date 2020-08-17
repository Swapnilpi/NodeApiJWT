const jwt = require("jsonwebtoken");
const { func } = require("@hapi/joi");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  next();

  try {
    const verified = jwt.verify(token, process.env.Token_Secret);
    req.user = verified;
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
