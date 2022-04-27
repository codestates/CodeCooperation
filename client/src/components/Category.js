import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryWrap>
      <CategoryBtn>JavaScript</CategoryBtn>
      <CategoryBtn>TypeScript</CategoryBtn>
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
    </CategoryWrap>
  );
};

const CategoryWrap = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100vw;
  height: 5%;
  margin: auto;
  justify-content: space-around;
  background-color: tomato;
`;

const CategoryBtn = styled.button`
  height: 60px;
  width: 80px;
  border: 1px solid black;
  border-radius: 25px;
  cursor: pointer;
`;

export default Category;
