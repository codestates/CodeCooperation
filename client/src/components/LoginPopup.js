import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
function LoginPopup({ handleClose }) {
  return (
    <div>
      <BackDrop onClick={handleClose}>
        <PopUp>
          <H1Box>
            <H1Text>로그인 후 CodeCooperation 이용하세요!</H1Text>
          </H1Box>
          <ButtonBox>
            {/* <LoginButtonBox>
              <LoginButton onClick={handleLoginModal}>로그인</LoginButton>
            </LoginButtonBox> */}
            <CloseButtonBox>
              <CloseButton onClick={handleClose}>나가기</CloseButton>
            </CloseButtonBox>
          </ButtonBox>
        </PopUp>
      </BackDrop>
    </div>
  );
}

export default LoginPopup;

const BackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const PopUp = styled.div`
  position: fixed;
  width: 25%;
  height: 15%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
  z-index: 3;
  text-align: center;
`;

const H1Box = styled.div`
  width: 100%;
  height: 40%;
  /* border: 1px solid lightgray; */
`;

const H1Text = styled.div`
  font-family: "Noto Sans KR";
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 5rem;
  color: #4c5175;
`;
const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  /* border: 1px solid lightgray; */
`;

const LoginButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  /* border: 1px solid lightgray; */
`;

const LoginButton = styled.button`
  width: 60%;
  height: 50%;
  border: 0;
  outline: 0;
  border-radius: 3rem;
  background-color: #56d0a0;
  color: white;
  cursor: pointer;
`;

const CloseButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid lightgray; */
`;
const CloseButton = styled.button`
  width: 40%;
  height: 50%;
  border: 0;
  outline: 0;
  border-radius: 3rem;
  background-color: #56d0a0;
  color: white;
  cursor: pointer;
`;
