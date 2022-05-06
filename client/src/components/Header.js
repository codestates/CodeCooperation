import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
const CLIENT_ID = "64fe86c46742a2a3e00351691147e584";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

// 프런트엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

// 백엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:5000/kakao/code";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Header = ({ handleResponseSuccess }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  function Modal(){
    return(
      <Modaldiv>
        <Modalcenter>
          <ModalCancel onClick={closeModal} ></ModalCancel>
          <Modalh1>로그인</Modalh1>
          <Modalform onSubmit={(e) => e.preventDefault()}>

            <Modalinfo>
              <ModalName>아이디</ModalName>
              <FaUserAlt />
              <Modalinput type='text' placeholder='아이디를 입력해 주세요.'/>
            </Modalinfo>

            <Modalinfo>
              <ModalName>패스워드</ModalName>
              <FaLock />
              <Modalinput type='password' placeholder='패스워드를 입력해 주세요.'/>
            </Modalinfo>

            <Modalbutton className='btn btn-login' type='submit' onClick={handleLogin}>로그인</Modalbutton>

            <ModalAcount>
              비회원이신가요?&nbsp;  
              <Link to='/signup' onClick={closeModal}>회원가입</Link>
            </ModalAcount>

            <SosialLogo>
              <Google></Google>
              <Kakao></Kakao>
            </SosialLogo>
            {errorMessage ? alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다.') : null}
        </Modalform>
      </Modalcenter>
    </Modaldiv>
    )
  }

  /*Login*/
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    if (!loginInfo.email || !loginInfo.password) {
      setErrorMessage("아이디와 비밀번호를 입력하세요");
      return;
    } else {
      setErrorMessage("");
    }
    return axios
      .post("https://localhost:4000/signin", loginInfo)
      .then((data) => handleResponseSuccess());
  };

  return (
    <Wrap>
      {isLogin ? <Login /> : null}
      <LogoDiv>
        <Logo to="/">CodeCooperation</Logo>
      </LogoDiv>
      <NavList>
        <ProjectList to="/projectlist">프로젝트 목록</ProjectList>
        <ProjectAdd to="/project">프로젝트 추가</ProjectAdd>
      </NavList>
      <LoginList>
        <Login onClick={openModal}>로그인</Login>
        {showModal === true ? <Modal /> : null}
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

const Modaldiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
`;
const Modalcenter = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  width: 400px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Modalh1 = styled.h1``;
const Modalform = styled.div`
  border: 0px solid;
`;
const ModalName = styled.div`
  font-size: 15pt;
  margin-bottom: 5px;
`;
const Modalinfo = styled.div`
  width: 400px;
  height: 60px;
  margin-top: 10px;
`;

const Modalbutton = styled.div`
  border: 1px solid gray;
  margin-top: 10px;
  text-align: center;
  width: 100px;
  height: 40px;
  margin-left: 120px;
  font-size: 24px;
  border-radius: 20px;
  background-color: gray;
`;

const ModalAcount = styled.div`
  width: 170px;
  height: 22px;
  font-size: 15px;
  margin-left: 180px;
  margin-top: 5px;
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`;

const Modalinput = styled.input`
  width: 300px;
  margin-left: 10px;
  margin-top: -3px;
  height: 30px;
`;

const SosialLogo = styled.div`
  width: 200px;
  height: 300px;
  margin-left: 80px;
  margin-top: 10px;
`;
const Google = styled.div`
  width: 190px;
  height: 43px;
  background-size: initial;
  background-image: url("https://cdn.discordapp.com/attachments/965889268411166780/971266453724602378/GoogleLogin.png");
  margin-bottom: 10px;
  margin-left: -5px;
`;
const Kakao = styled.div`
  width: 180px;
  height: 45px;
  background-size: initial;
  background-image: url("https://cdn.discordapp.com/attachments/965889268411166780/971261801666846740/KakaoLogin.png");
`;
const ModalCancel = styled.div`
margin-left: 340px;
width: 30px;
height: 30px;
background-size : initial;
background-image: url('https://cdn.discordapp.com/attachments/965889268411166780/972017707761414184/icons8-close-30.png');
`;
export default Header;
