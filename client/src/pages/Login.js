import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      setErrorMessage('이메일과 비밀번호를 입력하세요')
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
        <h1>Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type='email' onChange={handleInputValue('email')} />
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type='password'
              onChange={handleInputValue('password')}
            />
          </div>
          <div>
            <Link to='/signup'>아직 아이디가 없으신가요?</Link>
          </div>
          <button className='btn btn-login' type='submit' onClick={handleLogin}>
            로그인
          </button>
          {errorMessage ? <div className='alert-box'>{errorMessage}</div> : null}
        </form>
      </center>
    </div>
  );
}
