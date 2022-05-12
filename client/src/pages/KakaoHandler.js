import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../reducer/userInfoReducer";

function Kakaohandler() {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [refreshToken, setRefreshToken] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

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
      url: `${process.env.SERVER_URL}/kakao-login/token`,
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
  };

  useEffect(() => {
    getUserInfo(accessToken);
    return () => {};
  }, [accessToken]);

  const getUserInfo = (accessToken) => {
    axios({
      method: "get",
      url: `${process.env.SERVER_URL}/kakao-login/userinfo?accessToken=${accessToken}`,
    })
      .then((res) => {
        console.log(res.data, "서버에서 받은 데이터");
        const { id, email, nickname, password } = res.data.user;
        dispatch(LOG_IN({ id, email, nickname, password }));
        // setUserInfo(res.data);
        // handleResponseSuccess();
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div></div>;
}

export default Kakaohandler;
