import React from "react";
import styled from "styled-components";
import JavaScriptImg from "../images/javascript.png";
import ReactImg from "../images/react.png";
import { Link } from "react-router-dom";

const ProjectBody = ({ posts }) => {
  return (
    <ProjectDiv to="/postdetail">
      <Top>
        <State>{posts.state}</State>
        <Title>{posts.title}</Title>
        <ByWho>by. {posts.who}</ByWho>
      </Top>
      <Body>
        <Detail>{posts.detail}</Detail>
      </Body>
      <Bottom>
        <ImgDiv>
          <Img src={JavaScriptImg}></Img>
          <Img src={ReactImg}></Img>
        </ImgDiv>
        <BottomBottom>
          <Term>
            {posts.termStart} ~ {posts.termEnd}
          </Term>
          <HeadCount>
            {posts.count}명/{posts.totalCount}명 참여중
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
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
`;

const ImgDiv = styled.div`
  display: flex;
  margin-left: 20px;
  /* border: 1px solid black; */
  width: 50%;
  height: 50%;
`;

const Img = styled.img`
  border-radius: 70%;
  margin-right: 20px;
  width: 100%;
  height: 100%;
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
