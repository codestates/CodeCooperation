import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import ProjectBody from "../components/ProjectBody";
import SearchBar from "../components/SearchBar";

const ProjectList = ({ post, history }) => {
  return (
    <MainDiv>
      <Category />
      <SearchBar />
      <Wrap>
        {post.map((el) => (
          <ProjectBody posts={el} history={history} />
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
