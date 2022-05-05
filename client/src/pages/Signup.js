import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Styled from "styled-components";

axios.defaults.withCredentials = true;

export default function Signup() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
    username: "",
    mobile: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = () => {
    if (
      !userinfo.email ||
      !userinfo.password ||
      !userinfo.username ||
      !userinfo.mobile
    ) {
      setErrorMessage("모든 항목은 필수입니다");
      console.log(errorMessage);
      return;
    } else {
      setErrorMessage("");
    }
    return axios
      .post("https://localhost:4000/signup", userinfo)
      .then((res) => history.push("/"));
  };
  return (
    <div>
      <Styledcenter>
        <Styledform onSubmit={(e) => e.preventDefault()}>
          <Styledh2>회원가입</Styledh2>

          <Styledbar></Styledbar>

          <Styleddiv>
            <Styledspan>아이디</Styledspan>
            <Styledinfo>4글자 이상의 아이디를 입력해주세요.</Styledinfo>
            <Input
              type="text"
              onChange={handleInputValue("email")}
              placeholder="아이디"
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
              onChange={handleInputValue("password")}
              placeholder="비밀번호 확인"
            />
          </Styleddiv>

          <Styleddiv>
            <Styledspan>닉네임</Styledspan>
            <Styledinfo>겹치지 않는 닉네임을 입력해주세요.</Styledinfo>
            <Input
              type="text"
              onChange={handleInputValue("username")}
              placeholder="닉네임"
            />
          </Styleddiv>

          <Styledbutton type="submit" onClick={handleSignup}>
            회원가입
          </Styledbutton>

          <Styledspan>이미 아이디가 있으신가요?</Styledspan>

          <StyledLink>
            <Link to="/login">로그인</Link>
          </StyledLink>

          {errorMessage ? (
            <div className="alert-box">{errorMessage}</div>
          ) : null}
        </Styledform>
      </Styledcenter>
    </div>
  );
}

const Styledform = Styled.form`
padding-top: 100px;
padding-left: 200px;
width: 600px;
height: 800px;
`;

const Styledcenter = Styled.div`
justify-content: center;
height: 150%;
display: flex;
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
background-color: skyblue;
color: white;
height: 40px;
width: 295px;
margin-top: 20px;
border-radius: 5px;
font-size: 15pt;
text-align: center;
padding-top: 5px;
font-weight: bold;
`;

const StyledLink = Styled.div`
font-weight: bold;
font-size: 13pt;
`;
