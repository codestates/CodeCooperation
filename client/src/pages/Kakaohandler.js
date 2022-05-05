import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const qs = require("qs");
function Kakaohandler() {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [refreshToken, setRefreshToken] = useState();

  const history = useHistory();

  /*   let grant_type = "authorization_code";
  let client_id = "64fe86c46742a2a3e00351691147e584";
  let clientSecret = "CJ8l34h8aIMizgiTo80a40Pf2ggJX9Qk";
  let redirect_uri = "http://localhost:3000/oauth/callback/kakao"; */

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code, "code 입니다");
    if (code) {
      getAccessToken(code);
    }
    return () => {};
  }, []);

  const getAccessToken = (code) => {
    axios({
      method: "post",
      url: `http://localhost:5000/post/kakao-login/token`,
      data: {
        code,
      },
    })
      .then((res) => {
        console.log(res.data, "토큰입니다.");
        if (!refreshToken) {
          setRefreshToken(res.data.refresh_token);
        }
        setAccessToken(res.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
    history.push("/");
  };

  return <div></div>;
}

export default Kakaohandler;
