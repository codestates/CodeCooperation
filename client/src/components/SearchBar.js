import React from "react";
import styled from "styled-components";
import axios from "axios";

const SearchBar = () => {
  return (
    <SearchBox>
      <Search placeholder="검색어를 입력해주세요."></Search>
      <SearchBtn>
        <i className="fa-solid fa-magnifying-glass"></i>
      </SearchBtn>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  height: 40px;
  margin: 40px auto;
  padding: 0px 0px;
  justify-content: space-between;
  border-bottom: 1px solid #b3b3b3;
`;

const Search = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  cursor: text;
`;

const SearchBtn = styled.button`
  cursor: pointer;
  font-size: 20px;
  width: 5%;
  height: 100%;
  background-color: transparent;
  border: none;
`;

export default SearchBar;
