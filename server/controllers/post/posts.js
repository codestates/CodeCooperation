const { post } = require("../../models");
const db = require("../../models");

module.exports = {
  getAllPost: async (req, res) => {
    const result = await post.findAll({
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
