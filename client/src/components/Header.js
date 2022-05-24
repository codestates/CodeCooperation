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
import profil from "../images/4.png";

const Header = ({ handleResponseSuccess }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  const handleLoginModal = () => {
    setShowModal(!showModal);
  };

  /*Login*/
  let isLogin = useSelector((state) => state.userInfo.isLogin);
  let user = useSelector((state) => state.userInfo.userInfo.nickname);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    setShowDrop(!showDrop);
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
  const handleDropBox = () => {
    setShowDrop(!showDrop);
  };
  const handleMyPage = () => {
    setShowDrop(!showDrop);
    history.push("/mypage");
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
          {/* {isLogin && <LoginText>안녕하세요 </LoginText>} */}
          {isLogin && <NameText>{user + " 님"}</NameText>}
          {isLogin && (
            <LoginImgBox onClick={handleDropBox}>
              <LoginImg src={profil} />
            </LoginImgBox>
          )}
          {showDrop && (
            <DropBox>
              <Li onClick={handleMyPage}>마이페이지</Li>
              <Li2 onClick={handleLogout}>로그아웃</Li2>
            </DropBox>
          )}
          {isLogin ? null : <Login onClick={handleLoginModal}>로그인</Login>}
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
  /* box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3); */
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
  align-items: center;
`;

const LoginText = styled.div`
  padding-top: 5px;
  font-family: Noto Sans KR;
  font-weight: 500;
`;
const NameText = styled.div`
  font-family: Jua;
  /* font-weight: 600; */
  color: #383c58;
  font-size: large;
  padding-left: 3px;
`;

const LoginImgBox = styled.div`
  width: 50px;
  height: 100%;
  cursor: pointer;
`;

const LoginImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  backface-visibility: hidden;
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

const DropBox = styled.div`
  background: #ffffff;
  color: #333333;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  opacity: 1;
  visibility: visible;
  transform: translateY(0);
`;
const Li = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  &:hover {
    color: #56d0a0;
  }
`;
const Li2 = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: #56d0a0;
  }
`;
export default Header;
