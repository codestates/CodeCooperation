import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../reducer/userInfoReducer";
import { useHistory, Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import GoogleImg from "../images/Googleimg.png";
import KakaoImg from "../images/Kakaoimg.png";
const KAKAO_ID = "64fe86c46742a2a3e00351691147e584";
const REDIRECT_URI = "http://localhost:3001/oauth/callback/kakao";
//배포하면 `https://codescooperation.com/oauth/callback/kakao`;
const GOGLE_ID = `83742645542-43rk66t5ppss8jc6q2divjadr9uo6otf.apps.googleusercontent.com`;
const GOGLE_URL = `http://localhost:3001/oauth/callback/google`;
//배보 하면 `https://codescooperation.com/oauth/callback/google`;

export const GOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOGLE_ID}&access_type=offline&redirect_uri=${GOGLE_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function LoginModal({ handleLoginModal, setShowModal }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const outSection = useRef();

  const handleSignUp = () => {
    handleLoginModal();
    history.push("/signup");
  };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const axios_Login = (userEmail, userPassword) => {
    return axios.post(
      `http://localhost:3000/signin`,
      {
        email: userEmail,
        password: userPassword,
      },
      {
        withCredentials: true,
      }
    );
  };

  const handleLogin = (e) => {
    if (!loginInfo.email || !loginInfo.password) {
      setErrorMessage("아이디와 비밀번호를 모두 입력 해주세요");
      return;
    }
    return axios_Login(loginInfo.email, loginInfo.password)
      .then((res) => {
        console.log("받은데이터유저", res);
        const { id, email, nickname, accessToken } = res.data.user;
        dispatch(
          LOG_IN({
            id,
            email,
            nickname,
            accessToken,
          })
        );
        setShowModal(false);
        history.push("/");
      })
      .catch(() => {
        setErrorMessage("아이디 또는 비밀번호가 맞지않습니다");
      });
  };

  const loginEnter = (e) => {
    e.preventDefault();
    if ((e.code = "Enter")) {
      handleLogin();
    }
  };

  const googleLoginHandler = (e) => {
    e.preventDefault();
    window.location.assign(GOGLE_AUTH_URL);
  };
  const kakaoLoginHandler = (e) => {
    e.preventDefault();
    window.location.assign(KAKAO_AUTH_URL);
  };
  return (
    <div>
      <BackDrop
        ref={outSection}
        onClick={(e) => {
          if (outSection.current === e.target) {
            handleLoginModal();
          }
        }}
      >
        <PopUp>
          <CancelButtonBox>
            <CancelButton onClick={handleLoginModal}>✖</CancelButton>
          </CancelButtonBox>
          <Form onSubmit={(e) => e.preventDefault()}>
            <H1Box>
              <H1Text>로그인</H1Text>
            </H1Box>
            <IdBox>아이디</IdBox>

            <InputBox>
              <Input
                type="text"
                onChange={handleInputValue("email")}
                placeholder="아이디를 입력해 주세요."
              ></Input>
            </InputBox>
            <IdBox>비밀번호</IdBox>
            <InputBox>
              <Input
                type="password"
                placeholder="패스워드를 입력해 주세요."
                onChange={handleInputValue("password")}
              ></Input>
            </InputBox>

            <ErrorBox>
              {errorMessage ? <div>{errorMessage}</div> : null}
            </ErrorBox>
            <LoginButtonBox>
              <LoginButton type="submit" onClick={handleLogin}>
                로그인
              </LoginButton>
            </LoginButtonBox>
            <SignUpButtonBox>
              <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
            </SignUpButtonBox>
            <GoogleBox>
              <GoogleButton onClick={googleLoginHandler}>
                <GoogleImags src="https://3gamestates.com/img/googlelogo.png" />
                <GoogleText>구글 로그인</GoogleText>
              </GoogleButton>
            </GoogleBox>
            <KakaoBox>
              <KakaoButton onClick={kakaoLoginHandler}>
                <KakaoImags src="https://3gamestates.com/img/kakaologo.png" />
                <KakaoText>카카오 로그인</KakaoText>
              </KakaoButton>
            </KakaoBox>
          </Form>
        </PopUp>
      </BackDrop>
    </div>
  );
}

export default LoginModal;

const BackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const PopUp = styled.div`
  position: fixed;
  width: 23%;
  height: 68%;
  border-radius: 10px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  background-color: white;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
  z-index: 4;
  text-align: center;
`;

const CancelButtonBox = styled.div`
  width: 100%;
  height: 5%;
  /* border: 1px solid lightgray; */
  margin-left: auto;
`;

const LoginButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8%;
  /* border: 1px solid lightgray; */
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  width: 45%;
  height: 90%;
  border-radius: 0.5rem;
  font-family: "Noto Sans KR";
  font-weight: 800;
  cursor: pointer;
  background-color: white;
  color: #4c5175;
  border: 2px solid #4c5175;
  &:hover {
    background-color: #4c5175;
    color: white;
  }
`;

const SignUpButtonBox = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8%;
  /* border: 1px solid lightgray; */
`;

const SignUpButton = styled.button`
  border: 0;
  outline: 0;
  font-family: "Noto Sans KR";
  font-weight: 800;
  width: 45%;
  height: 90%;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: white;
  color: #4c5175;
  border: 2px solid #4c5175;
  &:hover {
    background-color: #4c5175;
    color: white;
  }
`;

const CancelButton = styled.button`
  float: right;
  font-size: 1.3rem;
  margin: 5px 10px 0 0;
  border: 0;
  outline: 0;
  background-color: white;
  color: #4c5175;
  cursor: pointer;
`;

const H1Box = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 10%;
  /* border: 1px solid lightgray; */
`;

const H1Text = styled.div`
  font-family: "Noto Sans KR";
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 3rem;
  color: #4c5175;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9%;
  /* padding: 0 0 0 15px;
  /* border: 1px solid lightgray; */

  /* margin-right: auto; */
`;

const Input = styled.input`
  font-size: 1rem;
  width: 90%;
  height: 90%;
  border-radius: 0.8rem;
  border: 2px solid lightgray;
  padding: 0 0 0 10px;
  &:focus {
    border: 0;
    outline: 2px solid #4c5175;
  }
`;

const IdBox = styled.div`
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 1.2rem;
  font-weight: 800;
  /* line-height: 3rem; */
  color: #4c5175;
  width: 100%;
  height: 8%;
  /* border: 1px solid lightgray; */
  text-align: left;
  padding: 0 0 0 20px;
`;

const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-weight: 800;
  /* line-height: 3rem; */
  color: #4c5175;
  width: 100%;
  height: 7%;
  /* border: 1px solid lightgray; */
  text-align: center;
  /* padding: 0 0 0 20px; */
`;

const GoogleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 9%;
  /* border: 1px solid lightgray; */
`;

const KakaoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 9%;
  /* border: 1px solid lightgray; */
`;
const Google = styled.img.attrs({
  src: `${GoogleImg}`,
})`
  width: 190px;
  height: 43px;
`;
const Kakao = styled.img.attrs({
  src: `${KakaoImg}`,
})`
  width: 180px;
  height: 45px;
`;
const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  font-family: "Noto Sans KR";
  font-weight: 800;
  width: 45%;
  height: 90%;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid lightgray;
  background-color: white;

  /* &:hover {
    background-color: #4c5175;
    color: white;
  } */
`;

const GoogleText = styled.div`
  padding-top: 15px;
  width: 100%;
  height: 100%;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 400;
`;
const GoogleImags = styled.img`
  width: 28px;
  height: 28px;
`;
const KakaoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  font-family: "Noto Sans KR";
  font-weight: 800;
  width: 45%;
  height: 90%;
  border-radius: 0.5rem;
  cursor: pointer;

  background-color: #fee500;

  /* &:hover {
    background-color: #4c5175;
    color: white;
  } */
`;
const KakaoText = styled.div`
  padding-top: 15px;
  width: 100%;
  height: 100%;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 400;
`;
const KakaoImags = styled.img`
  margin-left: 5px;
  width: 25px;
  height: 25px;
`;
const Form = styled.form`
  width: auto;
  height: 100%;
`;
