const express = require("express");
const router = express.Router();
const kakao = require("./users/kakao");
const google = require("./users/google");

router.get("/", kakao.get);
router.post("/kakao-login/token", kakao.getToken);
router.get("/kakao-login/userInfo?", kakao.getUserInfo);
router.post("/google-login/token", google.getToken);
router.get("/google-login/userInfo?", google.getUserInfo);

module.exports = router;
