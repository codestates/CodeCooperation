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

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/postdetail" exact>
          <DetailPage />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/projectlist">
          <ProjectList />
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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
