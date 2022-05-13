import React from "react";
import styled from "styled-components";

const UserInfo = () => {
  return (
    <Wrap>
      <Header>
        <TitleLogo>
          <i class="fa-solid fa-pen"></i>
        </TitleLogo>
        <MainTitle>회원정보 수정</MainTitle>
      </Header>

      <UpdateBox>
        <UserImg></UserImg>

        <UserInfoDiv>
          <UserInfoLeft>
            <Title>이메일</Title>
            <Title>닉네임</Title>
            <Title>사용 스택</Title>
            <Title>비밀번호</Title>
          </UserInfoLeft>

          <UserInfoRight>
            <Email>ghoo@naver.com</Email>
            <NicknameDiv>
              <Nickname>지후</Nickname>
              <Button>변경</Button>
            </NicknameDiv>
            <StackDiv>
              <Stack>
                {CategoryName.map((name, index) => (
                  <option value={index}>{name}</option>
                ))}
              </Stack>
            </StackDiv>
            <PasswordDiv>
              <Password></Password>
              <Button>변경</Button>
            </PasswordDiv>
          </UserInfoRight>
        </UserInfoDiv>
      </UpdateBox>

      <BottomBtnDiv>
        <AmendBtn>수정</AmendBtn>
        <CancelBtn>취소</CancelBtn>
      </BottomBtnDiv>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  padding: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 400px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgb(196 196 196);
`;

const TitleLogo = styled.div`
  font-size: 30px;
  color: #56d0a0;
  margin-right: 10px;
`;

const MainTitle = styled.div`
  font-size: 30px;
  margin-right: 20px;
`;

const UpdateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: auto;
  margin-top: 30px;
`;

// 유저 이미지
const UserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
  border: 0;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;

// 유저정보
const UserInfoDiv = styled.div`
  position: relative;
  display: flex;
  margin-top: 50px;
  width: 400px;
  justify-content: space-between;
`;

// 유저정보 왼쪽
const UserInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

// 유저정보 제목
const Title = styled.span`
  font-size: 18px;
  margin-bottom: 50px;
`;

// 유저정보 오른쪽
const UserInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 250px;
`;

// 이메일
const Email = styled.span`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 50px;
`;

// 닉네임
const NicknameDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Nickname = styled(Email)``;
const Button = styled.button`
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  height: 25px;
  width: 40px;
  background-color: #56d0a0;
  border: none;
  color: white;
  margin-top: -2px;
  cursor: pointer;
`;

// 사용 스택
const StackDiv = styled(NicknameDiv)``;
const Stack = styled.select`
  font-size: 15px;
  margin-bottom: 50px;
  outline: none;
  width: 250px;
  border-radius: 10px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;

// 비밀번호
const PasswordDiv = styled(NicknameDiv)``;
const Password = styled(Nickname)``;

// 수정, 취소 버튼
const BottomBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  margin-top: 20px;
`;

const AmendBtn = styled.button`
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  height: 40px;
  width: 70px;
  background-color: #56d0a0;
  border: none;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const CancelBtn = styled(AmendBtn)``;

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

export default UserInfo;
