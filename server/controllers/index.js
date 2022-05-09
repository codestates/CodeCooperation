const express = require("express");
const router = express.Router();
const kakao = require("./users/kakao");
const google = require("./users/google");
const signup = require("./users/signup");
const signin = require("./users/signin");

router.get("/", kakao.get);
router.post("/kakao-login/token", kakao.getToken);
router.get("/kakao-login/userInfo?", kakao.getUserInfo);
router.post("/google-login/token", google.getToken);
router.get("/google-login/userInfo?", google.getUserInfo);

router.post("/signup", signup.generalSignUp);
router.post("/signin", signin.generalSignIn);

module.exports = router;
