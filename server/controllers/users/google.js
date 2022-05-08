const axios = require("axios");
const { user } = require("../../models");

module.exports = {
  getToken: async (req, res) => {
    console.log(req.body.code, "클라이언트에서받은 코드");
    const code = req.body.code;
    const client_id = `78567862441-tcldhai7ojkrf0uouf9anhh7fscmha0f.apps.googleusercontent.com`;
    const redirect_uri = `http://localhost:3000/oauth/callback/google`;
    const client_secret = `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`;
    const grant_type = "authorization_code";
    const URL = `https://www.googleapis.com/oauth2/v4/token`;

    const token = await axios.post(
      URL,
      {
        code,
        client_id,
        client_secret,
        redirect_uri,
        grant_type,
      },
      {
        "content-type": "application/x-www-form-urlencoded",
      }
    );

    res.send(token.data);
  },
  getUserInfo: async (req, res) => {
    try {
      console.log(req.query.accessToken, "클라이언트에서 받은 토큰");
      const googleInfoURL = `https://www.googleapis.com/oauth2/v2/userinfo`;
      const accessToken = req.query.accessToken;
      const userInfo = await axios.get(googleInfoURL, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(userInfo.data, "userInfo입니다.");

      const nickname = userInfo.data.name;
      let password = userInfo.data.id + nickname;

      const result = await user.findOne({
        where: {
          id: userInfo.data.id,
        },
      });
      if (result) {
        const userData = {
          id: userInfo.data.id,
          email: userInfo.data.email || nickname,
          nickname: nickname || userInfo.data.kakao_account.email,
          password: password,
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
        const usersignupInfo = {
          id: userInfo.data.id,
          email: userInfo.data.email || nickname,
          nickname: nickname || userInfo.data.kakao_account.email,
          password: password,
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
      console.log(error, "에러입니다.");
    }
  },
};
