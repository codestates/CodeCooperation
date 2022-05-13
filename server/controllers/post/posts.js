const { post } = require("../../models");
const db = require("../../models");
const { isAuthorized } = require("../../jwt/generateAccessToken");

module.exports = {
  getAllPost: async (req, res) => {
    const result = await post.findAll({
      include: [{ model: db["user"] }],
    });

    console.log(result[0].user, "포스트정보");

    const data = result.map((el) => {
      return el.dataValues;
    });

    res.status(200).json({ data, message: "ok" });
  },
  sendPost: async (req, res) => {
    const accessTokendata = req.headers["authorization"];
    console.log(accessTokendata, "토큰데이터입니다.");
    const {
      userId,
      postTitle,
      content,
      startDate,
      endDate,
      totalMember,
      openURL,
      postStack,
    } = req.body;

    console.log(
      userId,
      postTitle,
      content,
      startDate,
      endDate,
      totalMember,
      openURL,
      postStack,
      "유저정보들"
    );
    if (!accessTokendata) {
      res.status(401).send("invalid");
    } else {
      if (!userId) {
        res
          .status(422)
          .json({ data: null, message: "insufficient parameters supplied" });
      } else {
        post
          .create({
            user_id: userId,
            title: postTitle,
            start_date: Number(startDate),
            end_date: Number(endDate),
            content: content,
            total_member: totalMember,
            current_member: 1,
            project_status: true,
            stack: postStack,
          })
          .then((data) => {
            console.log("data:", data);
            res.status(201).json({
              message: "ok",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  },
};
