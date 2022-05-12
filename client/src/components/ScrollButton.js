import React from "react";
import styled from "styled-components";

function ScrollButton() {
  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Container>
        <TopButton onClick={handleTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </TopButton>
      </Container>
    </div>
  );
}

export default ScrollButton;

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
`;

const TopButton = styled.button`
  cursor: pointer;
  position: fixed;
  z-index: 1;
  bottom: 4rem;
  right: 3rem;
  color: #4c5175;
  background-color: white;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  border: 2px solid #e1e8ec;
  border-radius: 50%;
  display: flex;
  opacity: 0.8;
`;
//navy: 4c5175,e1e8ec  ,green : 56d0a0
