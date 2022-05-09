import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../reducer/userInfoReducer";
import { useHistory, Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
const CLIENT_ID = "64fe86c46742a2a3e00351691147e584";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

const GOGLE_ID =
  "78567862441-tcldhai7ojkrf0uouf9anhh7fscmha0f.apps.googleusercontent.com";
const GOGLE_URL = "http://localhost:3000/oauth/callback/google";

export const GOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOGLE_ID}&access_type=offline&redirect_uri=${GOGLE_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function LoginModal({ handleLoginModal, setShowModal }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const axios_Login = (userEmail, userPassword) => {
    return axios.post(
      `http://localhost:5000/signin`,
      {
        email: userEmail,
        password: userPassword,
      },
      {
        withCredentials: true,
      }
    );
  };

  const handleLogin = () => {
    if (!loginInfo.email || !loginInfo.password) {
      setErrorMessage("아이디와 비밀번호를 모두 입력 해주세요");
      return;
    }
    return axios_Login(loginInfo.email, loginInfo.password)
      .then((res) => {
        console.log("받은데이터유저", res);
        const { id, nickname, loginType } = res.data.user;
        const accessToken = res.data.accessToken;
        dispatch(
          LOG_IN({
            id,
            nickname,
            accessToken,
            loginType,
          })
        );
        setShowModal(false);
        history.push("/");
      })
      .catch(() => {
        setErrorMessage("아이디 또는 비밀번호가 맞지않습니다");
      });
  };
  return (
    <Modaldiv>
      <Modalcenter>
        <ModalCancel onClick={handleLoginModal}></ModalCancel>
        <Modalh1>로그인</Modalh1>
        <Modalform onSubmit={(e) => e.preventDefault()}>
          <Modalinfo>
            <ModalName>아이디</ModalName>
            <FaUserAlt />
            <Modalinput
              type="text"
              onChange={handleInputValue("email")}
              placeholder="아이디를 입력해 주세요."
            />
          </Modalinfo>

          <Modalinfo>
            <ModalName>패스워드</ModalName>
            <FaLock />
            <Modalinput
              type="password"
              placeholder="패스워드를 입력해 주세요."
              onChange={handleInputValue("password")}
            />
          </Modalinfo>
          {errorMessage ? <div>{errorMessage}</div> : null}

          <Modalbutton
            className="btn btn-login"
            type="submit"
            onClick={handleLogin}
          >
            로그인
          </Modalbutton>

          <ModalAcount>
            비회원이신가요?&nbsp;
            <Link to="/signup" onClick={handleLoginModal}>
              회원가입
            </Link>
          </ModalAcount>

          <SosialLogo>
            <a href={GOGLE_AUTH_URL}>
              <Google />
            </a>
            <a href={KAKAO_AUTH_URL}>
              <Kakao />
            </a>
          </SosialLogo>
        </Modalform>
      </Modalcenter>
    </Modaldiv>
  );
}

export default LoginModal;

const Modaldiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
`;
const Modalcenter = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  width: 400px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Modalh1 = styled.h1``;
const Modalform = styled.div`
  border: 0px solid;
`;
const ModalName = styled.div`
  font-size: 15pt;
  margin-bottom: 5px;
`;
const Modalinfo = styled.div`
  width: 400px;
  height: 60px;
  margin-top: 10px;
`;

const Modalbutton = styled.div`
  border: 1px solid gray;
  margin-top: 10px;
  text-align: center;
  width: 100px;
  height: 40px;
  margin-left: 120px;
  font-size: 24px;
  border-radius: 20px;
  background-color: gray;
`;

const ModalAcount = styled.div`
  width: 170px;
  height: 22px;
  font-size: 15px;
  margin-left: 180px;
  margin-top: 5px;
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`;

const Modalinput = styled.input`
  width: 300px;
  margin-left: 10px;
  margin-top: -3px;
  height: 30px;
`;

const SosialLogo = styled.div`
  width: 200px;
  height: 300px;
  margin-left: 80px;
  margin-top: 10px;
`;
const Google = styled.div`
  width: 190px;
  height: 43px;
  background-size: initial;
  background-image: url("https://cdn.discordapp.com/attachments/965889268411166780/971266453724602378/GoogleLogin.png");
  margin-bottom: 10px;
  margin-left: -5px;
`;
const Kakao = styled.div`
  width: 180px;
  height: 45px;
  background-size: initial;
  background-image: url("https://cdn.discordapp.com/attachments/965889268411166780/971261801666846740/KakaoLogin.png");
`;
const ModalCancel = styled.div`
  margin-left: 340px;
  width: 30px;
  height: 30px;
  background-size: initial;
  background-image: url("https://cdn.discordapp.com/attachments/965889268411166780/972017707761414184/icons8-close-30.png");
`;
