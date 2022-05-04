import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { RiKakaoTalkFill } from 'react-icons/ri'

axios.defaults.withCredentials = true;

export default function Login ({ handleResponseSuccess }) {
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
    <div>
      <center>
        <h1>로그인</h1>
        <form onSubmit={(e) => e.preventDefault()}>

          <div>
            <FaUserAlt />
            <input type='text' onChange={handleInputValue('email')} placeholder='아이디를 입력해 주세요.'/>
          </div>

          <div>
            <FaLock />
            <input type='password' onChange={handleInputValue('password')} placeholder='패스워드를 입력해 주세요.'/>
          </div>

          <div>
            <span>비회원이신가요?</span>
            <Link to='/signup'>회원가입?</Link>
          </div>

          <button className='btn btn-login' type='submit' onClick={handleLogin}>로그인</button>
          <FcGoogle />
          <button>Google</button>
          
          <RiKakaoTalkFill />
          <button>KaKao</button>
          
          {errorMessage ? <div className='alert-box'>{errorMessage}</div> : null}
        </form>
      </center>
    </div>
  );
}
