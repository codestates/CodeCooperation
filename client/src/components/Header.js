import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { RiKakaoTalkFill } from 'react-icons/ri'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  /*Modal*/
  let [modal, modalChange] = useState(false);

  function Modal(){
    return(
      <Modaldiv>
        <Modalcenter>
          <Modlah1>로그인</Modlah1>
          <Modalform onSubmit={(e) => e.preventDefault()}>

            <Modalinfo>
              <ModalName>아이디</ModalName>
              <FaUserAlt />
              <Modalinput type='text' onChange={handleInputValue('email')} placeholder='아이디를 입력해 주세요.'/>
            </Modalinfo>

            <Modalinfo>
              <ModalName>패스워드</ModalName>
              <FaLock />
              <Modalinput type='password' onChange={handleInputValue('password')} placeholder='패스워드를 입력해 주세요.'/>
            </Modalinfo>

            <Modalbutton className='btn btn-login' type='submit' onClick={handleLogin}>로그인</Modalbutton>

            <ModalAcount>
              <span>비회원이신가요?</span>
              <Link to='/signup'>회원가입?</Link>
            </ModalAcount>

            <FcGoogle />
            <ModalSocial>Google</ModalSocial>
          
            <RiKakaoTalkFill />
            <ModalSocial>KaKao</ModalSocial>
          
            {errorMessage ? <div className='alert-box'>{errorMessage}</div> : null}
        </Modalform>
      </Modalcenter>
    </Modaldiv>
    )
  }

  /*Login*/
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    if(!loginInfo.email || !loginInfo.password) {
      setErrorMessage('아이디와 비밀번호를 입력하세요')
      return;
    }
    else {
      setErrorMessage('')
    }
    return axios.post('https://localhost:4000/signin',loginInfo).then((data)=>handleResponseSuccess())
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
        <Login onClick={ () => {modalChange(true)}}>로그인</Login>
        { modal === true ? <Modal/> : null} 
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
const Modlah1 = styled.h1`
`;
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
const ModalAcount = styled.div`
border: 1px solid red;
`;
const Modalbutton = styled.div`
border: 1px solid red;
margin-top: 20px;
`;

const Modalinput = styled.input`
width: 350px;
height: 30px;
`;
const ModalSocial = styled.div`
border: 1px solid red;
`;

export default Header;
