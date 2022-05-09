const { user } = require("../../models");
const { generateAccessToken } = require("../../jwt/generateAccessToken");
const { generateRefreshToken } = require("../../jwt/generateRefreshToken");

module.exports = {
  generalSignIn: async (req, res) => {
    const { email, password } = req.body;
    console.log("서버 로그인 바디 :", req.body);

    const findUser = await user.findOne({
      where: { email, password },
    });

    if (!findUser) {
      res.status(404).json({ message: "Can't find User" });
    } else {
      const userData = {
        id: findUser.id,
        email: findUser.email,
        nickname: findUser.nickname,
        loginType: "email",
      };
      console.log(findUser);
      const accessToken = await generateAccessToken(
        findUser.id,
        email,
        password
      );
      const refreshToken = await generateRefreshToken(
        findUser.id,
        email,
        password
      );
      //   res.cookie("refreshToken", refreshToken, {
      //     maxAge: 60 * 60 * 24 * 180, // 6개월
      //     //domain: "/",
      //     //path: "/",
      //     httpOnly: true,
      //     secure: true,
      //     sameSite: "none",
      //   });

      //console.log(req.cookies.refreshToken);
      res.json({
        message: "login Success",
        accessToken: accessToken,
        user: userData,
      });
    }
  },
};
