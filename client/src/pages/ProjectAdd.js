import React from "react";
import styled from "styled-components";

const ProjectAdd = () => {
  return (
    <Wrap>
      <ProjectAddDiv>
        <Header>
          <Title>프로젝트 작성</Title>
        </Header>
        <PostDiv>
          <TextDiv>제목</TextDiv>
          <TitleDetail placeholder="제목을 입력해주세요."></TitleDetail>
        </PostDiv>
        <TermDiv>
          <TermLeft>
            <TextDiv>프로젝트 시작일</TextDiv>
            <TermStart type="date"></TermStart>
          </TermLeft>
          <TermRight>
            <TextDiv>프로젝트 종료일</TextDiv>
            <TermEnd type="date"></TermEnd>
          </TermRight>
        </TermDiv>
        <CountDiv>
          <TextDiv>프로젝트 인원</TextDiv>
          <Count>
            {CountHead.map((name, index) => (
              <option value={index}>{name}</option>
            ))}
          </Count>
        </CountDiv>
        <StackDiv>
          <TextDiv>사용하는 스택</TextDiv>
          <StackSelect>
            {CategoryName.map((name, index) => (
              <option value={index}>{name}</option>
            ))}
          </StackSelect>
        </StackDiv>
        <ChatDiv>
          <TextDiv>오픈채팅 URL</TextDiv>
          <ChatAddress placeholder="오픈채팅방 URL을 입력해주세요."></ChatAddress>
        </ChatDiv>
        <DetailDiv>
          <TextDiv>프로젝트 소개</TextDiv>
          <Detail placeholder="프로젝트 내용을 적어주세요."></Detail>
        </DetailDiv>
        <BtnDiv>
          <Btn>완료</Btn>
        </BtnDiv>
      </ProjectAddDiv>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectAddDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
  height: 800px;
  width: 750px;
`;

const Header = styled.div`
  height: 10%;
  width: 100%;
`;

const Title = styled.h2``;

// 제목
const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextDiv = styled.span`
  color: rgb(78, 68, 45);
  font-size: 20px;
`;

const TitleDetail = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;

// 기간
const TermDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`;

const TermLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`;

const TermStart = styled(TitleDetail)``;

const TermRight = styled(TermLeft)``;

const TermEnd = styled(TitleDetail)``;

// 인원
const CountDiv = styled(PostDiv)`
  margin-top: 30px;
`;

const Count = styled.select`
  height: 40px;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;

// 스택
const StackDiv = styled(PostDiv)`
  margin-top: 30px;
`;

const StackSelect = styled.select`
  height: 40px;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;

// 오픈채팅
const ChatDiv = styled(PostDiv)`
  margin-top: 30px;
`;

const ChatAddress = styled(TitleDetail)``;

//내용
const DetailDiv = styled(PostDiv)`
  margin-top: 30px;
  height: 100%;
`;

const Detail = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;

//버튼
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

const Btn = styled.button`
  font-size: 20px;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  background-color: transparent;
  border: 1px solid rgb(196 196 196);
  &:hover {
    background-color: #56d0a0;
    color: white;
    transition: 0.3s ease-out;
  }
  cursor: pointer;
`;

//
const CountHead = ["선택하세요.", 1, 2, 3, 4, 5, 6];
const CategoryName = [
  "선택하세요.",
  "JavaScript",
  "Java",
  "Phython",
  "Node.js",
  "React",
  "C++",
  "Flask",
  "Django",
  "Vue",
  "Spring",
  "php",
  "Swift",
  "Kotlin",
  "TypeScript",
];

export default ProjectAdd;
