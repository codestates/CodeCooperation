const { user } = require("../../models");
const { generateAccessToken } = require("../jwtToken");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await user.findOne({
      where : { email }
    })
    if(!userInfo) {
      res.status(404).send({ data : null, message : "invalid user" })
    } else {
      const DBpassword = userInfo.dataValues.password;
      const rightUser = await bcrypt.compare(password, DBpassword);
      if(!rightUser) {
        res.status(400).send({ message : "비밀번호가 틀립니다." })
      } else {
        delete userInfo._previousDataValues.password;
        delete userInfo.dataValues.password;
        const accessToken = generateAccessToken(userInfo.dataValues);
        if(accessToken) {
          return res.status(200).send({ 
            user : { id: userInfo.dataValues.id, 
            nickname: userInfo.dataValues.nickname, accessToken }, 
            message: "토큰발급" })
        } 
      }
      }
  }