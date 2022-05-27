import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ProjectBody from "../components/ProjectBody";
import { LOG_OUT } from "../reducer/userInfoReducer";
import { useEffect } from "react/cjs/react.production.min";
axios.defaults.withCredentials = true;

export default function Mypage({ handleClick }) {
  const [isUserPosts, setIsUserPosts] = useState(false);
  const [isUserPosts1, setIsUserPosts1] = useState(true);
  const [isUserPosts2, setIsUserPosts2] = useState(false);
  const [isUserPosts3, setIsUserPosts3] = useState(false);

  const selectMenuHandler = () => {
    setIsUserPosts(true);
    setIsUserPosts1(false);
    setIsUserPosts2(false);
    setIsUserPosts3(false);
  };
  const selectMenuHandler1 = () => {
    setIsUserPosts(false);
    setIsUserPosts1(true);
    setIsUserPosts2(false);
    setIsUserPosts3(false);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  let user = useSelector((state) => state.userInfo.userInfo);
  let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));

  if (userInfo !== null) {
    user = userInfo;
  }

  let params = user.id;
  /* 내 게시글 상태 */
  const [showMylist, setShowMylist] = useState();
  /* 내 게시글 서버로 부터 가져오는 함수 */
  const callMylist = () =>
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/mylist/${params}`)
      .then((res) => {
        console.log(res.data.data);
        let allMylist = res.data.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setShowMylist(allMylist);
      });

  const deleteUser = () => {
    return axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/user-delete/${params}`,
      {
        withCredentials: true,
      }
    );
  };

  const handleDelete = () => {
    deleteUser().then(() => {
      window.alert("회원탈퇴 되었습니다.");
      dispatch(LOG_OUT());
    });
    return history.push("/");
  };

  return (
    <Wrap>
      <ProfileDiv>
        <ProfileTop>
          <Picture></Picture>
          <Nickname>{user.nickname}</Nickname>
        </ProfileTop>

        <Bar></Bar>

        {/* <ProfileMiddle>
          <StackTitle>TechStack</StackTitle>
          <Stack>JavaScript</Stack>
          <Stack>React</Stack>
        </ProfileMiddle> */}

        <ProfileBottom>
          {userInfo.loginType !== "Social" ? (
            <AcountInfoBtn onClick={() => history.push("/userinfo")}>
              회원수정
            </AcountInfoBtn>
          ) : null}
        </ProfileBottom>
        <ProfileBottom>
          <SecessionBtn onClick={handleDelete}>회원탈퇴</SecessionBtn>
        </ProfileBottom>
      </ProfileDiv>

      <ProjectDiv>
        <StyledNav>
          {/* <NavItems>모집</NavItems> */}
          <NavItems
            onClick={() => {
              selectMenuHandler1();
              callMylist();
            }}
          >
            작성한 글
          </NavItems>
          {/* <NavItems>진행</NavItems>
          <NavItems>완료</NavItems> */}
        </StyledNav>
        <BarDiv>
          {isUserPosts1 ? (
            <WrapOfList>
              {showMylist &&
                showMylist.map((el, i) => (
                  <ProjectBody key={i} posts={el} handleClick={handleClick} />
                ))}
            </WrapOfList>
          ) : null}
        </BarDiv>
      </ProjectDiv>
    </Wrap>
  );
}
const WrapOfList = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* overflow: auto; */
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 819px) {
    justify-content: center;
  }
`;

const Wrap = styled.div`
  justify-content: center;
  padding: 110px 0 0 0;
  height: auto;
  display: flex;
  width: 1400px;
  margin: auto;
  @media screen and (max-width: 1000px) {
  }
`;

const ProfileDiv = styled.div`
  border-radius: 20px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
  width: 280px;
  height: 600px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileTop = styled.div`
  height: 250px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Picture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
  border: 0;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;

const Nickname = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

// 구분선
const Bar = styled.div`
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
  justify-content: center;
`;

const ProfileMiddle = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StackTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Stack = styled.div`
  font-weight: 400;
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
`;

const ProfileBottom = styled.div`
  height: 80px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const AcountInfoBtn = styled.button`
  border-radius: 20px;
  width: 150px;
  height: 60px;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  background-color: #56d0a0;
  border: none;
  color: white;
  text-decoration-line: none;
  cursor: pointer;
  &:hover {
    background-color: #20c997;
    color: white;
  }
`;

const SecessionBtn = styled.button`
  border-radius: 20px;
  width: 150px;
  height: 60px;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  background-color: #ff6b6b;
  border: none;
  color: white;
  text-decoration-line: none;
  cursor: pointer;
  &:hover {
    background-color: #fa5252;
    color: white;
  }
`;

const ProjectDiv = styled.div`
  justify-content: center;
  border-radius: 20px;
  width: 985px;
  height: 600px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;

const StyledNav = styled.div`
  width: auto;
  margin-top: 20px;
  height: 55px;
  display: flex;
  justify-content: center;
`;

const NavItems = styled.div`
  text-align: center;
  margin: 10px 10px 10px 0;
  width: 100px;
  height: 40px;
  line-height: 44px;
  font-weight: 300;
  font-size: 20px;
  color: black;
  cursor: pointer;
  &:hover {
    font-weight: 500;
    transition: 0s ease;
  }
  &:visited {
    border-bottom: 5px solid black;
  }
`;

const BarDiv = styled.div`
  width: 100%;
  height: 85%;
  overflow: auto;
`;

const Bar2 = styled.div`
  width: 900px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;
