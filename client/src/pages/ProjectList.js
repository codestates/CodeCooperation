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
      if (stackClick == "전체") {
        setShowPosts(res.data.data);
      } else {
        let result = res.data.data.filter((el) =>
          el.stack.includes(stackClick)
        );
        setShowPosts(result);
      }
    });
  }, [stackClick]);
  return (
    <MainDiv>
      <Category handleStack={handleStack} />
      <SearchBar />
      <Wrap>
        {/* {post.map((el, i) => (
          <ProjectBody key={i} posts={el} handleClick={handleClick} />
        ))} */}
        {""}
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
`;

const MainDiv = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export default ProjectList;
