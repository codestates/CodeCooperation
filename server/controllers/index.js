const express = require("express");
const router = express.Router();
const kakao = require("./user/kakao");
const google = require("./user/google");
const signup = require("./user/signup");
const signin = require("./user/signin");
const signout = require("./user/signout");
// const auth = require("./user/auth");
const posts = require("./post/posts");
const post_add = require("./post/post-add");
const post_delete = require("./post/post-delete");
const post_modify = require("./post/post-modify");
const chat = require("./chat/chat");
const user_modify = require("./user/user-modify");

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
router.patch("/user-modify/:id", user_modify);
// router.get("/auth", auth);

// post
router.get("/posts", posts.getAllPost);
router.post("/post-add", post_add.sendPost);
router.delete("/post-delete/:id", post_delete.postdelete);
router.patch("/post-modify/:id", post_modify.postmodify);

router.get("/chat", chat.chatAll);
module.exports = router;
