import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import ProjectBody from "../components/ProjectBody";
import SearchBar from "../components/SearchBar";

const ProjectList = ({ post, handleClick }) => {
  return (
    <MainDiv>
      <Category />
      <SearchBar />
      <Wrap>
        {post.map((el) => (
          <ProjectBody posts={el} handleClick={handleClick} />
        ))}
      </Wrap>
    </MainDiv>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 1232px;
  margin: auto;
  justify-content: flex-start;
  border: 1px solid pink;
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
