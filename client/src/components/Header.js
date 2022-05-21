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
import LoginPopup from "./LoginPopup";

const Header = ({ handleResponseSuccess }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleAdd = () => {
    if (isLogin === true) {
      history.push("/projectadd");
    } else {
      setShowPopup(true);
    }
  };
  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <Wrap>
      <ContainerBox>
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
          {showPopup ? <LoginPopup handleClose={handleClose} /> : null}
          <ProjectAdd onClick={handleAdd}>프로젝트 추가</ProjectAdd>
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
      </ContainerBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100px;
  padding: 20px 0;
  justify-content: center;
  color: black;
  background-color: white;
  /* @media screen and (max-width: 600px) {
    background-color: lightblue;
  } */
  border-bottom: 1px solid lightgray;
  /* border: 1px solid lightgray; */
  z-index: 1;
`;
const ContainerBox = styled.div`
  display: flex;

  width: 75%;
  height: 100%;
  /* border: 1px solid lightgray; */
`;
// 로고
const LogoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* border: 1px solid lightgray; */
`;

const Logo = styled(Link)`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  color: #383c58;
  text-align: center;
  text-decoration-line: none;

  cursor: pointer;
  /* border: 1px solid lightgray; */
`;

// 목록
const NavList = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 25px;
  justify-content: space-around;
  line-height: 5px;
  /* background-color: yellow; */
  @media screen and (max-width: 800px) {
  }
  /* border: 1px solid lightgray; */
`;

const ProjectList = styled(Link)`
  font-family: Noto Sans KR;
  font-weight: 500;
  text-decoration-line: none;
  color: black;

  &:hover {
    font-weight: 500;
    transition: 0s ease;
  }
  cursor: pointer;
  /* border: 1px solid lightgray; */
`;

const ProjectAdd = styled(ProjectList)`
  /* border: 1px solid lightgray; */
`;

// 로그인
const LoginList = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  /* border: 1px solid lightgray; */
  justify-content: flex-end;
  /* align-items: center; */
`;

const Login = styled.button`
  background-color: white;
  border-radius: 25px;
  color: lightgray;
  border: 1px solid #56d0a0;
  height: 50px;
  width: 120px;
  font-size: 15px;
  font-weight: 600;
  background-color: #56d0a0;
  color: white;
  &:hover {
    background-color: #56d0a0;
    color: white;
    transition: 0.3s ease-out;
  }
  cursor: pointer;
  /* border: 1px solid lightgray; */
`;
/*Modal - styled-components*/

export default Header;
