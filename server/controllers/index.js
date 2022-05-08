const express = require("express");
const router = express.Router();
const kakao = require("./users/kakao");

router.get("/", kakao.get);
router.post("/kakao-login/token", kakao.getToken);
router.get("/kakao-login/userInfo?", kakao.getUserInfo);

module.exports = router;
