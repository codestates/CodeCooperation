const { user } = require("../../models");
const { generateAccessToken } = require("../jwtToken");

module.exports = async (req, res) => {
    const { email } = req.body;
    const userInfo = await user.findOne({
      where : { email }
    })
    if(!userInfo) {
      res.status(404).send({ data : null, message : "invalid user" })
    } else {
      delete userInfo.password;
      console.log(userInfo.dataValues.id)
      generateAccessToken(userInfo.dataValues);
      const accessToken = generateAccessToken(userInfo.dataValues);
      if(accessToken) {
        return res.status(200).send({ user : 
          { id: userInfo.dataValues.id, nickname: userInfo.dataValues.nickname
          ,accessToken
         }  
           , message: "토큰발급" })
      }
      
    }
  }