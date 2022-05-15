const { post } = require("../../models");
const db = require("../../models");

module.exports = {
  getAllPost: async (req, res) => {
    const result = await post.findAll({
      include: [{ model: db["user"] }],
    });

    const data = result.map((el) => {
      return el.dataValues;
    });

    for (let i = 0; i < data.length; i++) {
      delete data[i].user.dataValues.password;
    }

    res.status(200).json({ data, message: "ok" });
  }
};
