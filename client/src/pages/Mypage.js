import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Styled from "styled-components";
import styled from "styled-components";

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
      <StyledBackground>
        <StyledImg></StyledImg>
      </StyledBackground>

      <Styledcenter>
        <StyledProfile>
          <StyledPicture></StyledPicture>

          <StyledMyInfo>Sodanen</StyledMyInfo>

          <Styledbar></Styledbar>

          <StyledInfo>
            기술 스택
            <StyledMyInfo>JavaScript</StyledMyInfo>
          </StyledInfo>

          <StyledAcountInfo>회원정보 수정</StyledAcountInfo>
        </StyledProfile>

        <StyledProjectInfo>
          <StyledNav>
            <NavItems>모집</NavItems>
            <NavItems>관심</NavItems>
            <NavItems>진행</NavItems>
            <NavItems>완료</NavItems>
          </StyledNav>
        </StyledProjectInfo>
      </Styledcenter>
    </div>
  );
}

const StyledBackground = Styled.div`
justify-content: center;
padding: 20px;
height: 200px;
display:flex;
weight: 100px;
`;
const StyledImg = Styled.div`
background-color: gray;
width: 1300px;
height: 200px;
`;
const Styledcenter = Styled.div`
justify-content: center;
padding: 10px
height: 200px;
display:flex;
weight: 100px;
`;
const StyledProfile = Styled.div`
border-radius: 20px;
border:1px solid gray;
width: 280px;
height: 600px;
margin-right: 10px;  
`;
const StyledProjectInfo = Styled.div`
justify-content: center;
border-radius: 20px;
background: gray;
width: 985px;
height: 600px;
`;

const Styledbar = Styled.div`
border: 0.5px solid gray;
width: auto;
margin-top: 20px;
margin-bottom:20px;
`;

const StyledPicture = Styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
background-color: black;
margin-left: 60px;
margin-top: 30px;
`;
const StyledInfo = Styled.div`
font-size: 24pt;
text-align:center;
`;
const StyledMyInfo = Styled.div`
margin-top: 20px;
margin-bottom: 20px;
padding: 0px;
font-size: 24pt;
text-align:center;
font-weight:bold;
`;
const StyledAcountInfo = Styled.div`
background-color: skyblue;
border-radius: 5px;
margin-top: 120px;
margin-left: 20px;
margin-right: 20px;
font-size: 24pt;
text-align:center;
color:white;
`;

const StyledNav = Styled.div`
width: auto;
height: 55px;
display: flex;
justify-content: space-between;
justify-content: center;
border-bottom: 3px solid white;
`;
const NavItems = Styled.div`
align-items: center;
text-align: center;
margin-left: 100px;
margin-top: 10px;
width: 100px;
height: 40px;
line-height: 40px;
font-weight: bold;
color: white;
&:hover {
  color: black;
}
&:visited {
  border-bottom: 5px solid black;
}
`;
