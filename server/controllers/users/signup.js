const { user } = require("../../models");

module.exports = {
  generalSignUp: async (req, res) => {
    console.log("요청바디유저정보", req.body);
    const { email, nickname, password } = req.body;
    const data = await user.findOne({
      where: {
        email: email,
      },
    });
    if (data) {
      return res.status(409).json({ message: "email exists" });
    } else {
      const signup = {
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname,
      };
      try {
        await user.create({
          email: req.body.email,
          password: req.body.password,
          nickname: req.body.nickname,
        });
        res.status(200).json({ message: `회원가입 성공` });
        console.log("회원가입성공");
      } catch (e) {
        console.log("회원가입실패");
      }
    }
  },
};
