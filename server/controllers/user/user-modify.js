const { user } = require("../../models");
const { isAuthorized } = require("../jwtToken/index");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const rightUser = isAuthorized(req);
  const { userId, userNickname, password } = req.body;

  if (!rightUser) {
    res.status(401).send({ data: null, message: "토큰이 존재하지 않습니다." });
  } else {
    if (!userId) {
      res.status(400).send({ message: "전부 입력해주세요." });
    } else {
      const salt = 12;
      const hashed = await bcrypt.hash(password, salt);
      console.log(hashed, "해쉬드@@");
      let id = Number(userId);
      console.log(userNickname, "유저닉네임");
      await user
        .update(
          {
            nickname: userNickname,
            password: hashed,
          },
          { where: { id } }
        )
        .then(([result]) => {
          if (!result) {
            return res
              .status(500)
              .json({ message: "유저정보 수정이 안됐습니다." });
          } else {
            return res
              .status(200)
              .json({ message: "유저정보 수정이 완료되었습니다." });
          }
        })
        .catch((err) => {
          res.status(400).send({ message: err });
        });
    }
  }
};
