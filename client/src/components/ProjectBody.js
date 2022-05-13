import React from "react";
import styled from "styled-components";
import javascriptImg from "../images/javascript.png";
import reactImg from "../images/react.png";
import { Link } from "react-router-dom";

const ProjectBody = ({ posts, handleClick }) => {
  return (
    <ProjectDiv to="/postdetail" onClick={() => handleClick(posts)}>
      <Top>
        <State>{posts.state}</State>
        <Title>{posts.title}</Title>
        <ByWho>by. {posts.user.nickname}</ByWho>
      </Top>
      <Body>
        <Detail>{posts.content}</Detail>
      </Body>
      <Bottom>
        <ImgDiv>
          {/* <Img src={posts.img1}></Img>
          <Img src={posts.img2}></Img>
          <Img src={posts.img3}></Img>
          <Img src={posts.img4}></Img> */}
        </ImgDiv>
        <BottomBottom>
          <Term>
            {posts.start_date} ~ {posts.end_date}
          </Term>
          <HeadCount>
            {posts.current_member}명/{posts.total_member}명 참여중
          </HeadCount>
        </BottomBottom>
      </Bottom>
    </ProjectDiv>
  );
};

const ProjectDiv = styled(Link)`
  color: black;
  text-decoration-line: none;
  height: 330px;
  width: 350px;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
  cursor: pointer;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #56d0a0;
  z-index: -1;
`;

const State = styled.div`
  margin: 20px 20px 0 20px;
  font-size: 15px;
`;

const Title = styled.div`
  margin: 5px 20px 0 20px;
  font-size: 20px;
  font-weight: 500;
  height: 30%;
`;

const ByWho = styled.div`
  margin: 5px 20px 0 20px;
  font-size: 13px;
`;

const Body = styled.div`
  height: 30%;
`;

const Detail = styled.p`
  margin: 30px 20px 30px 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  width: 308px;
  height: 38px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  width: 350px;
`;

const ImgDiv = styled.div`
  display: flex;
  margin-left: 20px;
  /* border: 1px solid black; */
  height: 65px;
  width: 350px;
`;

const Img = styled.img`
  display: inline-block;
  content: "";
  border-radius: 70%;
  margin-right: 20px;
  width: 60px;
  height: 60px;
  border: none;
`;

const BottomBottom = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const Term = styled.div`
  font-size: 13px;
  margin: 30px 0px 0px 20px;
`;

const HeadCount = styled.p`
  font-size: 13px;
  margin: 30px 20px 0px 0px;
`;

export default ProjectBody;
