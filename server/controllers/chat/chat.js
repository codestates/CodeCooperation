const { chat } = require("../../models");
const db = require("../../models");

module.exports = {
  chatAll: async (req, res) => {
    // console.log(req.query.postId, "채팅포스트아이디");
    let postId = req.query.postId;
    const result = await chat.findAll({
      include: [{ model: db["user"] }],
    });
    for (let i = 0; i < result.length; i++) {
      delete result[i].dataValues.user.dataValues.password;
    }
    const data = result.map((el) => {
      return el.dataValues;
    });
    const filterd = data.filter((el) => Number(el.post_id) === Number(postId));

    // console.log(filterd, "필터링된값");
    res.status(200).json({ filterd, message: "ok" });
  },
};
