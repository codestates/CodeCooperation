require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");
const app = express();
const indexRouter = require("./controllers/index");
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);
const { chat } = require("./models");
// 시퀄라이즈 모델 테스트
const models = require("./models/index");
models.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("DB연결");
  })
  .catch((err) => {
    console.log("DB연결 실패");
    console.log(err);
  });

// 미들웨어
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "OPTION", "PUT", "DELETE", "PATCH"],
  })
);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true,
  },
});
//연결이되면? .on(이벤트를 받는다 , 콜백함수 실행)
//.emit(이벤트를 쏜다, 내정보)
io.on("connection", (socket) => {
  socket.on("join", ({ roomName: room, userName: user }) => {
    socket.join(room);

    io.to(room).emit("onConnect", `${user} 님이 입장했습니다.`);

    // 전송버튼 보낸걸 다시 ChatLog로 보내줌
    socket.on("onSend", async (messageItem) => {
      // console.log(room, "룸번호");
      // console.log(messageItem, "메시지아이템");
      const createdChat = await chat.create({
        user_id: messageItem.user,
        post_id: room,
        content: messageItem.msg,
      });
      io.to(room).emit("onReceive", messageItem);
    });

    socket.on("disconnect", () => {
      socket.leave(room);
      io.to(room).emit("onDisconnect", `${user} 님이 퇴장하셨습니다.`);
    });
  });
});
// 라우터
app.use("/", indexRouter);

// 서버 실행
app.set("port", process.env.PORT || 3000);
server.listen(app.get("port"), () => {
  console.log(`🧶서버가 ${app.get("port")} 포트로 열렸습니다!`);
});

module.exports = app;
