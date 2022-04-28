import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import JavaScriptImg from "../images/javascript.png";

const ProjectList = () => {
  return (
    <MainDiv>
      <Category />
      <Wrap>
        <ProjectDiv>
          <Top>
            <State>모집중</State>
            <Title>[ToyProject] 프론트 개발자 구해요!</Title>
            <ByWho>by. 지후</ByWho>
          </Top>
          <Body>
            <Detail>
              로그인, 회원가입, 글쓰기 등 구현하실 개발자 두 분 구합니다.
            </Detail>
          </Body>
          <Bottom>
            <ImgDiv>
              <Img>이미지</Img>
              <Img>이미지</Img>
            </ImgDiv>
            <BottomBottom>
              <Term>2022-04-30 ~ 2022-05-05</Term>
              <HeadCount>2/4명 참여중</HeadCount>
            </BottomBottom>
          </Bottom>
        </ProjectDiv>
      </Wrap>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Wrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const ProjectDiv = styled.div`
  height: 330px;
  width: 350px;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: 3px solid lightgray;
  cursor: pointer;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
  margin: 30px 20px 0px 20px;
`;

const Img = styled.div`
  margin-right: 20px;
  background-image: url(${JavaScriptImg});
`;

const BottomBottom = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const Term = styled.div`
  font-size: 13px;
  margin: 30px 20px 0px 20px;
`;

const HeadCount = styled.p`
  font-size: 13px;
  margin: 30px 20px 0px 20px;
`;

export default ProjectList;
