import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
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
import ScrollButton from "./components/ScrollButton";
import ScrollToTop from "./components/ScrollToTop";
import UserInfo from "./pages/UserInfo";
import ProjectModifiy from "./pages/ProjectModifiy";

export default function App() {
  const [post, setPost] = useState(posts.items);
  const [selectedFeed, setSelectedFeed] = useState(null);

  const select = (el) => setSelectedFeed(el);
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/projectmodifiy">
          <ProjectModifiy />
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
          <Signup />
        </Route>
        <Route exact path="/mypage">
          <Mypage />
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

        <Route exact path="/userinfo">
          <UserInfo />
        </Route>
      </Switch>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
}
