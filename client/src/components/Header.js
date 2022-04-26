import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrap>
      <LogoDiv>
        <Logo>CodeCooperation</Logo>
      </LogoDiv>
      <NavList>
        <Link to="/projectlist">
          <ProjectList>프로젝트 목록</ProjectList>
        </Link>
        <Link to="/project">
          <ProjectAdd>프로젝트 추가</ProjectAdd>
        </Link>
        <Login>Login</Login>
      </NavList>
    </Wrap>
  );
};

const Wrap = styled(Link)`
  position: relative;
  width: 100vw;
  max-width: 1400px;
  height: 5%;
  margin: auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  color: black;
  text-decoration-line: none;
  /* background-color: green; */
`;

const LogoDiv = styled.div`
  width: 15%;
  /* @media screen and (max-width: 750px) {
    width: 35%;
  } */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  cursor: pointer;
`;

const NavList = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  background-color: yellow;
`;

const ProjectList = styled.button`
  background-color: white;
  border-radius: 25px;
  border: 1px solid #65747f;
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

const ProjectAdd = styled(ProjectList)``;

const Login = styled(ProjectList)``;

export default Header;
