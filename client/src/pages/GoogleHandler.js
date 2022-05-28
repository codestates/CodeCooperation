import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../reducer/userInfoReducer";

function GoogleHandler() {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    // console.log(code, "code 입니다");
    if (code) {
      getAccessToken(code);
    }
    return () => {};
  }, []);

  useEffect(() => {
    getUserInfo(accessToken);
    return () => {};
  }, [accessToken]);

  const getUserInfo = async (accessToken) => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/google-login/userinfo?accessToken=${accessToken}`
      )
      .then((res) => {
        // console.log(res.data, "클라이언트에서받은데이터");
        const { id, email, nickname, password, accessToken, loginType } =
          res.data.user;
        dispatch(
          LOG_IN({ id, email, nickname, password, accessToken, loginType })
        );
        // setUserInfo(res.data);
        // handleResponseSuccess();
        history.push("/");
      });
  };

  const getAccessToken = async (code) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_SERVER_URL}/google-login/token`,
      data: {
        code,
      },
    })
      .then((res) => {
        // console.log(res.data.access_token, "토큰입니다.");
        if (!refreshToken) {
          setRefreshToken(res.data.refresh_token);
        }
        setAccessToken(res.data.access_token);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return <div></div>;
}
export default GoogleHandler;

/*   const onSuccess = async (response) => {
    console.log(response);
  }; */
/*       <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />; */
