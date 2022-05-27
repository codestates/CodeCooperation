const axios = require("axios");
const { user } = require("../../models");
const { post } = require("../../models");
module.exports = {
  getToken: (req, res) => {
    console.log(req.body.code, "서버쪽에서받은 코드@@@@@@@@@@@@@@@@@@@@");
    const code = req.body.code;

    const client_id = `${process.env.KAKAO_ID}`;
    const redirect_uri = `${process.env.BASIC_URL}/oauth/callback/kakao`;
    const grant_type = "authorization_code";

    axios({
      method: "post",
      url: `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
      .then((response) => {
        console.log(response.data,"@#@#!@#!#@!#!@#!@")
        res.send(response.data);

      })
      .catch((error) => {
        // console.log(error);
      });
  },
  getUserInfo: async (req, res) => {
    console.log(req.query.accessToken, "클라이언트에서 받은 토큰");
    try {
      const userInfo = await axios({
        method: "get",
        url: `https://kapi.kakao.com/v2/user/me?access_token=${req.query.accessToken}`,
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });
      let nickname = userInfo.data.kakao_account.profile.nickname;
      let email = userInfo.data.kakao_account.email;
      let password = userInfo.data.id + nickname;
      let accessToken = req.query.accessToken;
      console.log("result 유저정보", userInfo.data);

      const result = await user.findOne({
        where: {
          email,
          password,
        },
      });
      // const postInfo = await post.findAll({
      //   where: {
      //     user_id: result.id,
      //   },
      // });
      // console.log(postInfo, "유저의포스팅정보");
      if (result) {
        const userData = {
          id: result.id,
          email: email,
          nickname: nickname,
          accessToken: accessToken,
          loginType: "Social",
        };
        // delete result.dataValues.password;
        // const accessToken = generateAccessToken(result.dataValues);
        res
          // .cookie("accessToken", accessToken, {
          //   httpOnly: true,
          //   sameSite: "none",
          //   secure: true,
          //   maxAge: 60 * 60 * 24 * 1000,
          //   // domain: "art-ground.link",
          //   // path: "/",
          //   ovewrite: true,
          // })
          .status(200)
          .json({ user: userData });
      } else {
        // 최초 로그인 시 회원가입 진행

        await user.create({
          email: userInfo.data.kakao_account.email,
          password: password,
          nickname: nickname,
        });

        const findUser = await user.findOne({
          where: { email, password },
        });

        const usersignupInfo = {
          id: findUser.id,
          email: findUser.email,
          nickname: findUser.nickname,
          accessToken: accessToken,
          loginType: "Social",
        };
        // const data = (await user.create(usersignupInfo)).dataValues;
        // await signUpCaching(data);
        return (
          res
            // .cookie("accessToken", generateAccessToken(data), {
            //   httpOnly: true,
            //   sameSite: "none",
            //   secure: true,
            //   maxAge: 60 * 60 * 24 * 1000,
            //   // domain: "art-ground.link",
            //   // path: "/",
            //   ovewrite: true,
            // })
            .status(201)
            .json({ user: usersignupInfo })
        );
      }
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    res.status(200).send("HELLO WORLD");
  },
};
