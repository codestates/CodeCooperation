const { post } = require("../../models");
const db = require("../../models");

module.exports = {
  getUserPosts: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "해당하는 id값이 없음" });
    } else {
    }
    const result = await post.findAll({
      where: { user_id: id },
      include: [{ model: db["user"] }],
    });

    for (let i = 0; i < result.length; i++) {
      delete result[i].dataValues.user.dataValues.password;
    }

    const data = result.map((el) => {
      return el.dataValues;
    });

    res.status(200).json({ data, message: "ok" });
  },
};
