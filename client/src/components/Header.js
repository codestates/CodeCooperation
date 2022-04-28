import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrap>
      <LogoDiv>
        <Logo to="/">CodeCooperation</Logo>
      </LogoDiv>
      <NavList>
        <ProjectList to="/projectlist">프로젝트 목록</ProjectList>
        <ProjectAdd to="/project">프로젝트 추가</ProjectAdd>
      </NavList>
      <LoginList>
        <Login>Login</Login>
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

const NavList = styled.div`
  margin-right: 85px;
  display: flex;
  width: 20%;
  padding-top: 25px;
  justify-content: space-around;
  /* background-color: yellow; */
`;

const ProjectList = styled(Link)`
  font-weight: 600;
  text-decoration-line: none;
  color: black;
  cursor: pointer;
`;

const ProjectAdd = styled(ProjectList)``;

const LoginList = styled.div``;

const Login = styled.button`
  background-color: white;
  border-radius: 25px;
  color: lightgray;
  border: 1px solid black;
  height: 50px;
  width: 120px;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-out;
  }
  cursor: pointer;
`;

export default Header;
