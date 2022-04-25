import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Mypage (props) {
  if(!props.userinfo) {
    return '';
  }
  return (
    <div>
      <center>
        <h1>Mypage</h1>
        <div className='username'>{props.userinfo.username}</div>
        <div className='email'>{props.userinfo.email}</div>
        <div className='mobile'>{props.userinfo.mobile}</div>
        <button className='btn btn-logout' onClick={props.handleLogout}>
          logout
        </button>
      </center>
    </div>
  );
}

export default Mypage;
