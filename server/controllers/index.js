const express = require("express");
const router = express.Router();
const kakao = require("./user/kakao");
const google = require("./user/google");
const signup = require("./user/signup");
const signin = require("./user/signin");
const signout = require("./user/signout")
const auth = require("./user/auth");
const posts = require("./post/posts");

// oauth
router.get("/", kakao.get);
router.post("/kakao-login/token", kakao.getToken);
router.get("/kakao-login/userInfo?", kakao.getUserInfo);
router.post("/google-login/token", google.getToken);
router.get("/google-login/userInfo?", google.getUserInfo);

// user
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.get("/auth", auth);

// post
router.get("/posts", posts.getAllPost);

module.exports = router;
