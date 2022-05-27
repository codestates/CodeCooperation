import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Styled from "styled-components";
import { LOG_IN } from "../reducer/userInfoReducer";

axios.defaults.withCredentials = true;

export default function Signup() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    nickname: "",
    password: "",
    repassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const emailTest =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const passwordTest = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  const axios_Login = (userEmail, userPassword) => {
    return axios.post(
      `${process.env.REACT_APP_SERVER_URL}/signin`,
      {
        email: userEmail,
        password: userPassword,
      },
      {
        withCredentials: true,
      }
    );
  };

  const axios_Signup = (userEmail, userNickname, userPassword) => {
    return axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, {
      email: userEmail,
      password: userPassword,
      nickname: userNickname,
    });
  };

  const handleSignup = () => {
    if (!userinfo.email || !userinfo.password || !userinfo.nickname) {
      setErrorMessage("모든 항목은 필수입니다");
      return;
    } else {
      if (emailTest.test(userinfo.email) == false) {
        return setErrorMessage("이메일 형식이 아닙니다.");
      }
    }
    if (userinfo.password !== userinfo.repassword) {
      return setErrorMessage("비밀번호가 같지 않습니다");
    } else {
      if (passwordTest.test(userinfo.password) == false) {
        return setErrorMessage("영문 숫자 조합으로 8자리 이상 입력해주세요");
      }
    }

    return axios_Signup(
      userinfo.email,
      userinfo.nickname,
      userinfo.password
    ).then(() => {
      axios_Login(userinfo.email, userinfo.password)
        .then((res) => {
          console.log("받은데이터유저", res);
          const { id, email, nickname, accessToken } = res.data.user;
          console.log(accessToken);
          dispatch(
            LOG_IN({
              id,
              email,
              nickname,
              accessToken,
            })
          );
          history.push("/");
        })
        .catch(() => {
          // alert("중복된 이메일이 있습니다");
          setErrorMessage("중복된 이메일이 있습니다");
        });
    });
  };
  return (
    <div>
      <Styledcenter>
        <Styledform>
          <SignupBox onSubmit={(e) => e.preventDefault()}>
            <Styledh2>회원가입</Styledh2>

            <Styledbar></Styledbar>

            <Styleddiv>
              <Styledspan>이메일</Styledspan>
              <Styledinfo>이메일을 입력해주세요.</Styledinfo>
              <Input
                type="text"
                onChange={handleInputValue("email")}
                placeholder="이메일"
              />
            </Styleddiv>

            <Styleddiv>
              <Styledspan>비밀번호</Styledspan>
              <Styledinfo>
                영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
              </Styledinfo>
              <Input
                type="password"
                onChange={handleInputValue("password")}
                placeholder="비밀번호"
              />
            </Styleddiv>

            <Styleddiv>
              <Styledspan>비밀번호 확인</Styledspan>
              <Styledinfo>
                확인을 위해 비밀번호를 한 번 더 입력해주세요.
              </Styledinfo>
              <Input
                type="password"
                onChange={handleInputValue("repassword")}
                placeholder="비밀번호 확인"
              />
            </Styleddiv>

            <Styleddiv>
              <Styledspan>닉네임</Styledspan>
              <Styledinfo>겹치지 않는 닉네임을 입력해주세요.</Styledinfo>
              <Input
                type="text"
                onChange={handleInputValue("nickname")}
                placeholder="닉네임"
              />
            </Styleddiv>

            <Styledbutton type="submit" onClick={handleSignup}>
              회원가입
            </Styledbutton>

            {errorMessage ? (
              <div className="alert-box">{errorMessage}</div>
            ) : null}
          </SignupBox>
        </Styledform>
      </Styledcenter>
    </div>
  );
}

const Styledform = Styled.div`
padding-top: 5%;
/* padding-left: 200px; */
width: 19%;
height: 850px;
/* border: 1px solid lightgray; */
`;

const Styledcenter = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 100%;
padding: 100px 0 0 0;
/* border: 1px solid lightgray; */
`;
const Styledh2 = Styled.div`
margin-bottom: 10px;
text-align: left;
font-weight: bold;
font-size: 24pt;
`;

const Styledbar = Styled.div`
border-bottom: 1px solid black;
width: 350px;
`;

const Styleddiv = Styled.div`
width: 100px;
padding-left: 5px
padding-top: 10px;
padding-bottom: 20px;
`;
const Styledspan = Styled.div`
padding-left: 90px
padding-top: 10px;
margin-top: 10px;
text-align: left;
font-weight: bold;
font-size: 15pt;
width: 500px;
display: flex;
`;
const Styledinfo = Styled.div`
width: 500px;
padding-top: 5px;
padding-bottom: 5px;
font-size: 10pt;
`;
const Input = Styled.input`
border: 1px solid gray;
display: flex;
height: 35px;
width: 342px;
border-radius: 5px;
font-size: 10pt;
`;
const Styledbutton = Styled.div`
background-color: #56d0a0;
color: white;
height: 40px;
width: 100%;
margin-top: 20px;
border-radius: 5px;
font-size: 15pt;
text-align: center;
padding-top: 5px;
font-weight: bold;
cursor: pointer;
  &:hover {
    background-color: #20c997;
    color: white;
  }
`;

const StyledLink = Styled.div`
font-weight: bold;
font-size: 13pt;
`;

const SignupBox = Styled.form`
  width: 100%;
  /* border: 1px solid red; */
  
`;
