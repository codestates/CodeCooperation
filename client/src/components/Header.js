import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Wrap>
      {isLogin ? <Login /> : null}
      <LogoDiv>
        <Logo to="/">CodeCooperation</Logo>
      </LogoDiv>
      <NavList>
        <ProjectList to="/projectlist">프로젝트 목록</ProjectList>
        <ProjectAdd to="/projectadd">프로젝트 추가</ProjectAdd>
      </NavList>
      <LoginList>
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </LoginList>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  max-width: 1400px;
  height: 5%;
  margin: auto;
  padding: 20px 0;
  justify-content: space-between;
  color: black;

  /* background-color: green; */
`;

// 로고
const LogoDiv = styled.div`
  width: 15%;
  /* @media screen and (max-width: 750px) {
    width: 35%;
  } */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  text-decoration-line: none;
  color: black;
  cursor: pointer;
`;

// 목록
const NavList = styled.div`
  margin-right: 95px;
  display: flex;
  width: 20%;
  padding-top: 25px;
  justify-content: space-around;
  /* background-color: yellow; */
`;

const ProjectList = styled(Link)`
  font-size: 18px;
  font-weight: 300;
  text-decoration-line: none;
  color: black;
  &:hover {
    font-weight: 500;
    transition: 0s ease;
  }
  cursor: pointer;
`;

const ProjectAdd = styled(ProjectList)``;

// 로그인
const LoginList = styled.div``;

const LoginButton = styled.button`
  background-color: white;
  border-radius: 25px;
  color: lightgray;
  border: 1px solid rgb(196 196 196);
  height: 50px;
  width: 120px;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    background-color: #56d0a0;
    color: white;
    transition: 0.3s ease-out;
  }
  cursor: pointer;
`;

export default Header;
