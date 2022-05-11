import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ProjectAdd from "./pages/ProjectAdd";
import ProjectList from "./pages/ProjectList";
import { posts } from "./components/posts";
import DetailPage from "./pages/DetailPage";
import Kakaohandler from "./pages/KakaoHandler";
import GoogleHandler from "./pages/GoogleHandler";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const [post, setPost] = useState(posts.items);
  const [selectedFeed, setSelectedFeed] = useState(null);
  const history = useHistory();
  const isAuthenticated = () => {
    axios
      .get("https://localhost:4000/auth")
      .then((data) => {
        setUserinfo(data.data);
        console.log(userinfo);
        setIsLogin(true);
        history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsLogin(false);
          history.push("/");
        }
      });
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post("https://localhost:4000/signout").then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      history.push("/");
    });
  };

  // useEffect(() => {
  //   isAuthenticated();
  // }, []);

  const select = (el) => {
    setSelectedFeed(el);
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/postdetail">
          <DetailPage selectedFeed={selectedFeed} />
        </Route>
        <Route path="/projectlist">
          <ProjectList post={post} handleClick={select} />
        </Route>
        <Route path="/projectadd">
          <ProjectAdd />
        </Route>
        {/* <Route path="/login">
          <Login
            isLogin={isLogin}
            handleResponseSuccess={handleResponseSuccess}
          />
        </Route> */}
        <Route path="/oauth/callback/kakao" exact>
          <Kakaohandler />
        </Route>
        <Route exact path="/signup">
          <Signup isLogin={isLogin} />
        </Route>
        <Route exact path="/mypage">
          <Mypage userinfo={userinfo} handleLogout={handleLogout} />
        </Route>
        {/* <Route path="/" exact>
          {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/login" />}
        </Route> */}
        <Route path="/oauth/callback/kakao" exact>
          <Kakaohandler />
        </Route>
        <Route path="/oauth/callback/google" exact>
          <GoogleHandler />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
