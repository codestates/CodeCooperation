import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import ProjectBody from "../components/ProjectBody";
import SearchBar from "../components/SearchBar";

const ProjectList = () => {
  return (
    <MainDiv>
      <Category />
      <SearchBar />
      <ProjectBody />
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

export default ProjectList;
