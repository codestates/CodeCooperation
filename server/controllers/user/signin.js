const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../jwtToken");

module.exports = {
  userSignIn : async (req, res) => {
    const { email, password, nickname } = req.body;
    const userInfo = await user.findOne({
      where : { email, password, nickname }
    })
    if(!userInfo) {
      res.status(404).send({ message : "invalid user" })
    } else {
      delete userInfo.password;
      generateAccessToken(userInfo);
      sendAccessToken(res, generateAccessToken(userInfo));
    }
  }
}
