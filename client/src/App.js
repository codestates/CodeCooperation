import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import axios from 'axios';
import './App.css';

export default function App () {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
  const isAuthenticated = () => {
    axios.get('https://localhost:4000/auth').then((data)=> {
      setUserinfo(data.data);
      console.log(userinfo)
      setIsLogin(true); 
      history.push('/');
    })
    .catch((err)=> {
      if(err.response.status===401) {
        setIsLogin(false);
        history.push('/');
      }
    })
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post('https://localhost:4000/signout').then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      history.push('/');
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login
            isLogin={isLogin}
            handleResponseSuccess={handleResponseSuccess}
          />
        </Route>
        <Route exact path='/signup'>
          <Signup isLogin={isLogin} />
        </Route>
        <Route exact path='/mypage'>
          <Mypage userinfo={userinfo} handleLogout={handleLogout} />
        </Route>
        <Route path='/'>
          {isLogin ? <Redirect to='/mypage' /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </div>
  );
}
