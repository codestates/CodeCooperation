import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { LOG_IN } from "../reducer/userInfoReducer";
import axios from "axios";

const UserInfo = () => {
  const [userModify, setUserModify] = useState({
    userNickname: "",
    password: "",
    repassword: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  let user = useSelector((state) => state.userInfo.userInfo);
  let accessToken = user.accessToken;
  let userId = user.id;

  if (userInfo !== null) {
    user = userInfo;
    userId = userInfo.id;
    accessToken = userInfo.accessToken;
  }

  const handleInputValue = (key) => (e) => {
    setUserModify({
      ...userModify,
      [key]: e.target.value,
    });
  };
  const { userNickname, password, repassword } = userModify;
  const modifiyusertHandle = () => {
    if (!userNickname || !password) {
      window.alert("항목을 모두 입력해주세요!🙏");
    }
    if (password !== repassword) {
      window.alert("비밀 번호가 다릅니다!");
    } else {
      axios
        .patch(
          `http://localhost:3000/user-modify/${userId}`,
          {
            userId,
            userNickname,
            password,
          },
          {
            headers: {
              authorization: accessToken,
            },
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          const { id, nickname, accessToken } = res.data.user;
          dispatch(
            LOG_IN({
              id,
              nickname,
              accessToken,
            })
          );
          history.push("/main");
        });
    }
  };
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
            <Title>닉네임 변경</Title>
            <Title>비밀번호 변경</Title>
            <Title>비밀번호 확인</Title>
            {/* <Title>사용 스택</Title> */}
          </UserInfoLeft>

          <UserInfoRight>
            <Email>{user.email}</Email>
            <NicknameDiv>
              <Nickname
                type="text"
                onChange={handleInputValue("userNickname")}
              ></Nickname>
            </NicknameDiv>
            <PasswordDiv>
              <Password
                type="password"
                onChange={handleInputValue("password")}
              ></Password>
            </PasswordDiv>
            <PasswordDiv>
              <Password
                type="password"
                onChange={handleInputValue("repassword")}
              ></Password>
            </PasswordDiv>

            {/* <StackDiv>
              <Select
                isMulti
                placeholder="기술 스택을 선택해주세요"
                styles={styles}
                components={animatedComponents}
                value={teckStack}
                options={stackSelect}
                onChange={handleChange}
              />
            </StackDiv> */}
          </UserInfoRight>
        </UserInfoDiv>
      </UpdateBox>

      <BottomBtnDiv>
        <AmendBtn onClick={modifiyusertHandle}>수정</AmendBtn>
        <CancelBtn to="/mypage">취소</CancelBtn>
      </BottomBtnDiv>
    </Wrap>
  );
};

const styles = {
  control: (base, state) => ({
    ...base,
    boxShadow: state.isFocused ? 0 : 0,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 14,
    margintop: -10,
    minHeight: 40,
    width: 250,
    boxShadow: "0px 0px 10px #ddd",
    borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
    "&:hover": {
      borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
    },
  }),
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  padding: 125px 0 0 0;
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
  width: 125px;
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
  margin-bottom: 50px;
`;
const Nickname = styled.input`
  font-size: 18px;
  font-weight: 300;
  width: 100%;
  border: 1px solid rgb(196 196 196);

  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;
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

// 비밀번호
const PasswordDiv = styled(NicknameDiv)`
  margin-bottom: 55px;
`;
const Password = styled(Nickname)``;

// 사용 스택
const StackDiv = styled.div`
  margin-bottom: 35px;
`;

// const Stack = styled.select`
//   font-size: 15px;
//   margin-bottom: 50px;
//   outline: none;
//   width: 250px;
//   border-radius: 10px;
//   border: 1px solid rgb(196 196 196);
//   box-shadow: rgb(221 221 221) 0px 0px 10px;
// `;

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

const CancelBtn = styled(Link)`
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  height: 40px;
  width: 70px;
  background-color: #56d0a0;
  border: none;
  color: white;
  margin: 20px;
  text-decoration-line: none;
  padding-top: 11px;
  cursor: pointer;
`;

// const CategoryName = [
//   "선택하세요.",
//   "JavaScript",
//   "Java",
//   "Phython",
//   "Node.js",
//   "React",
//   "C++",
//   "Flask",
//   "Django",
//   "Vue",
//   "Spring",
//   "php",
//   "Swift",
//   "Kotlin",
//   "TypeScript",
// ];

export default UserInfo;
