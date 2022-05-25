import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Category from "../components/Category";
import ProjectBody from "../components/ProjectBody";
import SearchBar from "../components/SearchBar";

const ProjectList = ({ post, handleClick }) => {
  const [showPosts, setShowPosts] = useState();
  const [stackClick, setStackClick] = useState("전체");
  const handleStack = (el) => {
    console.log("클릭한스택", el);
    setStackClick(el);
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/posts`).then((res) => {
      console.log(res.data.data);
      let allPost = res.data.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      if (stackClick === "전체") {
        //배포하면 allPost넣기
        setShowPosts(allPost);
      } else {
        let result = allPost.filter((el) => {
          let items = JSON.parse(el.stack);

          for (let i = 0; i < el.stack.length; i++) {
            if (items[i] === stackClick) {
              return true;
            }
          }
        });
        console.log(result, "리절트입니다.");
        setShowPosts(result);
      }
    });
  }, [stackClick]);
  return (
    <MainDiv>
      <Category handleStack={handleStack} />
      <SearchBar />
      <Wrap>
        {showPosts &&
          showPosts.map((el, i) => (
            <ProjectBody key={i} posts={el} handleClick={handleClick} />
          ))}
      </Wrap>
    </MainDiv>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 819px) {
    justify-content: center;
  }
`;

const MainDiv = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 100px 0 0 0;
  margin: auto;
  /* border: 1px solid red; */
`;

export default ProjectList;
