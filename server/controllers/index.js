const express = require("express");
const router = express.Router();
const kakao = require("./users/kakao");

router.post("/kakao-login/token", kakao.getToken);
