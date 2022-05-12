const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config(); //dotenv를 사용하기 위함

module.exports = {
  generateAccessToken: (id, email, password) => {
    let token = jwt.sign(
      {
        id: id,
        email: email,
        password: password,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 2년 짜리
        //연습용 exp: Math.floor(Date.now() / 1000) + 60 * 5, 5분 짜리
      },
      process.env.ACCESS_SECRET
    );

    return token;
  },
};
