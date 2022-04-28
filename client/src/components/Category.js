import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryWrap>
      <CategoryBtn>JavaScript</CategoryBtn>
      <CategoryBtn>Java</CategoryBtn>
      <CategoryBtn>Phython</CategoryBtn>
      <CategoryBtn>Node.js</CategoryBtn>
      <CategoryBtn>React</CategoryBtn>
      <CategoryBtn>C++</CategoryBtn>
      <CategoryBtn>Flask</CategoryBtn>
      <CategoryBtn>Django</CategoryBtn>
      <CategoryBtn>Vue</CategoryBtn>
      <CategoryBtn>Spring</CategoryBtn>
      <CategoryBtn>php</CategoryBtn>
      <CategoryBtn>Swift</CategoryBtn>
      <CategoryBtn>Kotlin</CategoryBtn>
      <CategoryBtn>TypeScript</CategoryBtn>
    </CategoryWrap>
  );
};

// const CategoryWrap = styled.div`
//   display: flex;
//   max-width: 1400px;
//   width: 100vw;
//   height: 5%;
//   margin: auto;
//   justify-content: space-around;
//   background-color: darkslategrey;
// `;

const CategoryWrap = styled.div`
  max-width: 1400px;
  position: relative;
  display: flex;
  margin: auto;
  justify-content: center;
  /* align-items: center; */
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0px -15px 10px -15px #f0f0f0 inset;
  /* overflow-y: hidden; */
`;

const CategoryBtn = styled.li`
  text-align: center;
  list-style: none;
  font-weight: 300;
  font-size: 19px;
  padding: 8px 15px;
  height: 40px;
  color: black;

  &:hover {
    font-weight: 500;
    transition: 0s ease;
  }
  cursor: pointer;
`;

export default Category;
