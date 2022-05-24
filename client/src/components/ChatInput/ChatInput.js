import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import styles from "./ChatInput.module.css";
import LoginPopup from "../LoginPopup";

const ChatInput = ({ userName, socket }) => {
  const [chatMessage, setChatMessage] = useState("");
  const [loginState, setLoginState] = useState(false);

  let isLogin = useSelector((state) => state.userInfo.isLogin);
  let user = useSelector((state) => state.userInfo.userInfo.id);
  console.log(user, "유저정보");
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("onSend", {
      userName: userName ? userName : localStorage.getItem("userName"),
      msg: chatMessage,
      timeStamp: new Date().toLocaleTimeString(),
      user,
    });
    setChatMessage("");
  };

  const onChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  const handleClose = () => {
    setLoginState(false);
  };

  const handlePopup = () => {
    if (!isLogin) {
      setLoginState(true);
    }
  };

  return (
    <div className={styles.ChatInputcontainer}>
      <form className={styles.ChatInputform} onSubmit={handleSubmit}>
        <input
          placeholder="메시지를 입력하세요."
          value={chatMessage}
          onChange={onChatMessageChange}
          className={styles.ChatInput}
          onClick={handlePopup}
        ></input>
        <button className={styles.Button}>전송</button>
        {loginState ? <LoginPopup handleClose={handleClose} /> : null}
      </form>
    </div>
  );
};

export default ChatInput;

/* 전송함수 버튼을 누르면
인풋안에 있던 내용을 서버에 onSend ,(messageItem) 보내줌
서버는 다시이걸 룸에다 뿌려줌 */
