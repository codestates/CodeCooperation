require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    // console.log(data)
    const accessToken = sign({ data }, process.env.ACCESS_SECRET, {
      algorithm: process.env.ALGORITHM,
      expiresIn: process.env.EXPIRESIN,
    });
    return accessToken;
  },

  isAuthorized: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    const token = authorization;
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
