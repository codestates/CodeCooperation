import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SupportRequest from "../components/SupportRequest";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import image1 from "../images/4.png";
import { useDispatch, useSelector } from "react-redux";
import { POST_ID } from "../reducer/userInfoReducer";
import axios from "axios";
import ChatInput from "../components/ChatInput/ChatInput";
import ChatLog from "../components/ChatLog/ChatLog";

function DetailPage({ selectedFeed }) {
  let user = useSelector((state) => state.userInfo.userInfo);
  let postId = selectedFeed.id;
  const [support, setSupport] = useState(false);
  const [currentSocket, setCurrentSocket] = useState();
  const [userName, setUserName] = useState(user.nickname);
  const [roomName, setroomName] = useState(selectedFeed.id);

  let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));

  if (userInfo !== null) {
    user = userInfo;
  }

  useEffect(() => {
    if (!userName) {
      setUserName("게스트");
    } else {
      setUserName(user.nickname);
    }
  }, []);

  const myInfo = {
    roomName,
    userName,
  };

  useEffect(() => {
    setCurrentSocket(socketIOClient("localhost:3000"));
  }, []); //소켓연결

  if (currentSocket) {
    currentSocket.on("connect", () => {
      currentSocket.emit("join", myInfo);
    });
  }
  const history = useHistory();
  const clickRequest = () => {
    setSupport(!support);
  };
  const dispatch = useDispatch();

  dispatch(POST_ID(postId));

  const deletePost = () => {
    return axios.delete(`http://localhost:3000/post-delete/${postId}`, {
      withCredentials: true,
    });
  };

  const handleLogin = () => {
    return deletePost().then(() => {
      history.push("/projectlist");
    });
  };

  return (
    <div>
      {support ? <SupportRequest clickRequest={clickRequest} /> : null}
      <Container0>
        <Container0BigBox>
          <Container0Box1>
            <ContentTitleBox1>
              <ContentTitle1>
                {selectedFeed.state ? "모집중" : "진행중"}
              </ContentTitle1>
            </ContentTitleBox1>

            <ContentTitle2Box>
              <ContentTitle2>{selectedFeed.title}</ContentTitle2>
            </ContentTitle2Box>
            <ContentTitle9Box>
              <ContentTitle9>기간</ContentTitle9>
            </ContentTitle9Box>
            <ContentTitle3Box>
              <ContentTitle3Box2>
                {selectedFeed.start_date} ~ {selectedFeed.end_date}
              </ContentTitle3Box2>
              <ContentTitle3Box3>
                <ContentTitle3date></ContentTitle3date>
              </ContentTitle3Box3>
            </ContentTitle3Box>
            <ContentTitle8Box>
              <ContentTitle8>사용스택</ContentTitle8>
            </ContentTitle8Box>
            <ContentTitle4>
              <ContentTitle4Stack>
                {JSON.parse(selectedFeed.stack).map((el, i) => {
                  return <span key={i}>{el} </span>;
                })}
              </ContentTitle4Stack>
            </ContentTitle4>
            <ContentTitle6Box>
              <ContentTitle6>프로젝트 설명</ContentTitle6>
            </ContentTitle6Box>
            <ContentTitle5>
              <ContentTitle5P>{selectedFeed.content}</ContentTitle5P>
            </ContentTitle5>
          </Container0Box1>

          <Container0Box2>
            <Container0Box3>
              <Container0Box4>
                <Content7ImgBox>
                  <Content7Img></Content7Img>
                </Content7ImgBox>
                <Content7UserBox>
                  <Content7User>
                    작성자 <br />
                    {selectedFeed.user.nickname}
                  </Content7User>
                </Content7UserBox>
              </Container0Box4>
              <ContentButtonBox>
                {/* <ContentButton onClick={clickRequest}>지원하기</ContentButton> */}
                <ContentButton2>
                  <i className="fas fa-solid fa-bookmark"></i> 북마크
                </ContentButton2>
                {selectedFeed.user.id == user.id ? (
                  <ContentButton3 onClick={handleLogin}>
                    삭제하기
                  </ContentButton3>
                ) : null}
                {selectedFeed.user.id == user.id ? (
                  <ContentButton4
                    onClick={() => history.push(`/projectmodifiy/${postId}`)}
                  >
                    수정하기
                  </ContentButton4>
                ) : null}
              </ContentButtonBox>
            </Container0Box3>
            <ChantBox0>
              {currentSocket && (
                <>
                  <ChatLogBox>
                    <ChatLog socket={currentSocket} postId={postId}></ChatLog>
                  </ChatLogBox>
                  <ChatInputBox>
                    <ChatInput
                      userName={userName}
                      socket={currentSocket}
                    ></ChatInput>
                  </ChatInputBox>
                </>
              )}
            </ChantBox0>
          </Container0Box2>
        </Container0BigBox>
      </Container0>
    </div>
  );
}

export default DetailPage;

const Container0 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60rem;
  padding: 100px 0 0 0;
  /* border: 1px solid lightgray; */
`;

const Container0BigBox = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  /* border: 1px solid lightgray; */
`;

const Container0Box1 = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px 40px 0 10px;
  /* border: 1px solid lightgray; */
`;

const Container0Box2 = styled.div`
  width: 30%;
  height: 100%;
  /* border: 1px solid lightgray; */
`;

const Container0Box3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  margin: 1rem 0 0 0;
  border: 3px solid #e1e8ec;
  border-radius: 1rem;
`;

const Container0Box4 = styled.div`
  display: flex;

  width: 100%;
  height: 30%;
  /* border: 1px solid lightgray; */
  margin-top: 10px;
`;

const Content7ImgBox = styled.div`
  width: 25%;
  height: 90%;
  /* border: 1px solid lightgray; */
`;

const Content7Img = styled.img.attrs({
  src: `${image1}`,
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const Content7UserBox = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  /* border: 1px solid lightgray; */

  /* height: 100%; */
`;
const Content7User = styled.div`
  width: 100%;
  /* line-height: 5rem; */
  /* height: 100%; */
  padding: 20px 0px 0px 5px;
  font-weight: 500;
  font-family: Noto Sans KR;
  font-size: 1rem;
  color: #4c5175;
`;

const ContentButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  /* border: 1px solid lightgray; */
`;

const ContentButton = styled.button`
  width: 80%;
  height: 20%;
  /*   background-color: #8ce7d9;
  color: white; */
  border: 1px solid powderblue;
  font-size: 1rem;
  font-weight: 500;
  font-family: Noto Sans KR;
  border-radius: 1.5rem;

  cursor: pointer;
  margin: 0 0 20px 0;

  background-color: white;
  border: 2px solid #4c5175;
  color: #4c5175;
  &:hover {
    background-color: #4c5175;
    color: white;
  }
`;
const ContentButton2 = styled.button`
  width: 80%;
  height: 20%;
  border: 0;
  font-size: 1rem;
  font-weight: 500;
  font-family: Noto Sans KR;
  border-radius: 1.5rem;
  cursor: pointer;
  /* background-color: #8ce7d9;
  color: white; */
  background-color: white;
  border: 2px solid #4c5175;
  margin: 0 0 20px 0;
  color: #4c5175;
  &:hover {
    background-color: #4c5175;
    color: white;
  }
`;
const ContentButton3 = styled.button`
  width: 80%;
  height: 20%;
  border: 0;
  font-size: 1rem;
  font-weight: 500;
  font-family: Noto Sans KR;
  border-radius: 1.5rem;
  margin: 0 0 20px 0;
  cursor: pointer;
  /* background-color: #8ce7d9;
  color: white; */
  background-color: white;
  border: 2px solid #4c5175;
  color: #4c5175;
  &:hover {
    background-color: #4c5175;
    color: white;
  }
`;

const ContentButton4 = styled.button`
  width: 80%;
  height: 20%;
  border: 0;
  font-size: 1rem;
  font-weight: 500;
  font-family: Noto Sans KR;
  border-radius: 1.5rem;
  cursor: pointer;
  /* background-color: #8ce7d9;
  color: white; */
  background-color: white;
  border: 2px solid #4c5175;
  color: #4c5175;
  margin: 0 0 20px 0;

  &:hover {
    background-color: #4c5175;
    color: white;
  }
`;

const ContentTitleBox1 = styled.div`
  width: 100%;
  /* border: 1px solid lightgray; */
`;

const ContentTitle1 = styled.button`
  font-size: 0.8rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  background-color: #66c02e;
  color: white;
  border: 1px solid #66c02e;
  border-radius: 0.5rem;
`;
const ContentTitle2Box = styled.div`
  width: 100%;
  padding: 0 0 10px 0;
  border-bottom: 2px solid #e1e8ec;
  /* border: 1px solid lightgray; */
`;

const ContentTitle2 = styled.div`
  width: 100%;
  font-weight: 900;
  font-size: 1.8rem;
  font-family: "Noto Sans KR";
`;

const ContentTitle3Box = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  /* border: 1px solid lightgray; */
`;
const ContentTitle3Box2 = styled.div`
  display: flex;
  width: 50%;
  line-height: 2.5rem;
  /* border: 1px solid lightgray; */
`;
const ContentTitle3Box3 = styled.div`
  display: flex;
  width: 50%;
  line-height: 2.5rem;
  /* border: 1px solid lightgray; */
`;
const ContentTitle3ImgBox = styled.div`
  width: 20%;
  height: 60%;
  margin: 5px 0 0 0;
  border-radius: 50%;
  /* border: 1px solid lightgray; */
`;
const ContentTitle3Img = styled.img.attrs({
  src: `${image1}`,
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const ContentTitle3 = styled.div`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
`;
const ContentTitle3date = styled.div`
  width: 100%;
  text-align: right;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: rgb(134, 142, 150);
`;

const ContentTitle4 = styled.div`
  width: 100%;
  height: 5%;

  /* border: 1px solid lightgray; */
`;
const ContentTitle4Stack = styled.div`
  width: 100%;
  line-height: 2.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  border-bottom: 2px solid #e1e8ee;
`;

const ContentTitle4Stack2 = styled.div``;

const ContentTitle5 = styled.div`
  width: 100%;
  /* border: 1px solid lightgray; */
`;

const ContentTitle5P = styled.div`
  font-size: 1.15rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  line-height: 2rem;
`;

const ContentTitle6Box = styled.div`
  width: 100%;
  height: 5%;
  /* border: 1px solid lightgray; */
`;

const ContentTitle6 = styled.div`
  width: 100%;
  line-height: 2.5rem;
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Noto Sans KR";
`;

const ContentTitle8Box = styled.div`
  width: 100%;
  height: 5%;
  /* border: 1px solid lightgray; */
`;

const ContentTitle8 = styled.div`
  width: 100%;
  line-height: 2.5rem;
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Noto Sans KR";
`;

const ContentTitle9Box = styled.div`
  width: 100%;
  height: 5%;
  margin: 10px 0 0 0;
  /* border: 1px solid lightgray; */
`;

const ContentTitle9 = styled.div`
  width: 100%;
  line-height: 2.5rem;
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Noto Sans KR";
`;
const ChantBox0 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  margin: 2rem 0 0 0;
  border: 3px solid #e1e8ec;
  border-radius: 1rem;
`;

const ChatLogBox = styled.div`
  width: 100%;
  height: 85%;
  overflow: auto;
  /* border: 1px solid lightgray; */
`;

const ChatInputBox = styled.div`
  width: 100%;
  height: 15%;
  border-top: 2px solid #e1e8ec;
  /* border: 1px solid lightgray; */
`;
