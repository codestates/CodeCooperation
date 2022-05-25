import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ProjectBody from "../components/ProjectBody";
axios.defaults.withCredentials = true;

export default function Mypage() {
  const [isUserPosts, setIsUserPosts] = useState(true);
  const [isUserPosts1, setIsUserPosts1] = useState(false);
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
  let user = useSelector((state) => state.userInfo.userInfo);

  /* 내 게시글 상태 */
  const [showMylist, setShowMylist] = useState();
  /* 내 게시글 서버로 부터 가져오는 함수 */
  const callMylist = axios.get("http://localhost:3000/mylist").then((res) => {
    console.log(res.data.data);
    let allMylist = res.data.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setShowMylist(allMylist);
  });

  return (
    <Wrap>
      <ProfileDiv>
        <ProfileTop>
          <Picture></Picture>
          <Nickname>{user.nickname}</Nickname>
        </ProfileTop>

        <Bar></Bar>

        <ProfileMiddle>
          <StackTitle>TechStack</StackTitle>
          <Stack>JavaScript</Stack>
          <Stack>React</Stack>
        </ProfileMiddle>

        <ProfileBottom>
          <AcountInfoBtn to="/userinfo">회원정보 수정</AcountInfoBtn>
        </ProfileBottom>
      </ProfileDiv>

      <ProjectDiv>
        <StyledNav>
          <NavItems>모집</NavItems>
          <NavItems onClick={selectMenuHandler1}>관심</NavItems>
          <NavItems>진행</NavItems>
          <NavItems>완료</NavItems>
        </StyledNav>
        <BarDiv>
          {/* <Bar2>{isUserPosts1 ? <div>구현중</div> : null}</Bar2> */}

          {/* {showMylist &&
            showMylist.map((el, i) => (
              // <ProjectBody key={i} posts={el} handleClick={handleClick} />
            ))} */}
        </BarDiv>
      </ProjectDiv>
    </Wrap>
  );
}

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

const AcountInfoBtn = styled(Link)`
  border-radius: 20px;
  width: 150px;
  height: 60px;
  font-size: 20px;
  text-align: center;
  background-color: #56d0a0;
  border: none;
  color: white;
  padding-top: 20px;
  text-decoration-line: none;
  cursor: pointer;
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
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const Bar2 = styled.div`
  width: 900px;
  border: 1px solid rgb(196 196 196);
  box-shadow: rgb(221 221 221) 0px 0px 10px;
`;
