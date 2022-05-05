const axios = require("axios");

module.exports = {
  getToken: (req, res) => {
    const code = req.body.code;

    const client_id = "64fe86c46742a2a3e00351691147e584";
    const redirect_uri = "http://localhost:3000/oauth/callback/kakao";
    const grant_type = "authorization_code";

    axios({
      method: "post",
      url: `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
