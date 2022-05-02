import React from "react";
import styled from "styled-components";
function SupportRequest({ clickRequest }) {
  return (
    <div>
      <BackDrop>
        <PopUp>
          <CancelButtonBox>
            <CancelButton onClick={clickRequest}>✖</CancelButton>
          </CancelButtonBox>
          <H1Box>
            <H1Text>지원 하기</H1Text>
          </H1Box>
          <InputBox>
            <Input placeholder="지원 신청 내용을 입력해주세요."></Input>
          </InputBox>
          <RequestButtonBox>
            <RequestButton>지원신청</RequestButton>
          </RequestButtonBox>
        </PopUp>
      </BackDrop>
    </div>
  );
}

export default SupportRequest;

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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const PopUp = styled.div`
  position: fixed;
  width: 30%;
  height: 30%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e1e8ec;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
  z-index: 3;
  text-align: center;
`;

const CancelButtonBox = styled.div`
  width: 100%;
  height: 10%;
  /* border: 1px solid lightgray; */
  margin-left: auto;
`;

const RequestButtonBox = styled.div`
  width: 100%;
  height: 15%;
  /* border: 1px solid lightgray; */
  margin-top: 1.5rem;
`;

const RequestButton = styled.button`
  border: 0;
  outline: 0;
  width: 60%;
  height: 100%;
  border-radius: 1rem;
  background-color: #4c5175;
  color: white;
  cursor: pointer;
`;

const CancelButton = styled.button`
  float: right;
  font-size: 1.3rem;
  margin: 5px 10px 0 0;
  border: 0;
  outline: 0;
  background-color: #e1e8ec;
  color: #4c5175;
  cursor: pointer;
`;

const H1Box = styled.div`
  width: 100%;
  height: 20%;
  /* border: 1px solid lightgray; */
`;

const H1Text = styled.div`
  font-family: "Noto Sans KR";
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 3rem;
  color: #4c5175;
`;

const InputBox = styled.div`
  width: 60%;
  height: 15%;
  /* border: 1px solid lightgray; */
  margin-top: 1.8rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  border: 1px solid lightgray;
  padding: 0 0 0 10px;
  &:focus {
    outline: 1px solid #4c5175;
  }
`;
