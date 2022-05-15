const { post } = require("../../models");

module.exports = {
  postModify: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      return res.status(400).send({ message: "해당하는 id값이 없음" });
    } else {
      await post.destroy({ where: { id } });
      return res.status(200).send({ message: "포스트 삭제" });
    }
  },
};
