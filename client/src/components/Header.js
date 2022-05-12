import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "../reducer/userInfoReducer";
import LoginModal from "./LoginModal";

const Header = ({ handleResponseSuccess }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginModal = () => {
    setShowModal(!showModal);
  };

  /*Login*/
  let isLogin = useSelector((state) => state.userInfo.isLogin);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    history.push("/");
    dispatch(LOG_OUT());
  };

  return (
    <Wrap>
      {showModal ? (
        <LoginModal
          handleLoginModal={handleLoginModal}
          setShowModal={setShowModal}
        />
      ) : null}
      <LogoDiv>
        <Logo to="/">CodeCooperation</Logo>
      </LogoDiv>
      <NavList>
        <ProjectList to="/projectlist">프로젝트 목록</ProjectList>
        <ProjectAdd to="/projectadd">프로젝트 추가</ProjectAdd>
      </NavList>
      <LoginList>
        {isLogin ? <Login onClick={handleLogout}>로그아웃</Login> : null}
        {isLogin ? (
          <Link to="/mypage">
            <Login>마이페이지</Login>
          </Link>
        ) : (
          <Login onClick={handleLoginModal}>로그인</Login>
        )}
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

const Login = styled.button`
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
/*Modal - styled-components*/

export default Header;
