const { post } = require("../../models");

module.exports = {
  getAllPost: async (req, res) => {
    const result = await post.findAll();
    const data = result.map((el) => {
      return el.dataValues;
    });

    res.status(200).json({ data, message: "ok" });
  },
};
