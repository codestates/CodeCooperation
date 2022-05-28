const { post } = require("../../models");

module.exports = {
  statysModify: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
      return res.status(400).send({ message: "해당하는 id값이 없음" });
    } else {
      await post.update(
        {
          project_status: status,
        },
        { where: { id } }
      );
      return res.status(200).send({ message: "포스트 현재상황 수정" });
    }
  },
};
