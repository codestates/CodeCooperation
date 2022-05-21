import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import LoginPopup from "../components/LoginPopup";
import Modal from "../components/Header";
import image_1 from "../images/1.png";
import image_2 from "../images/2.jpg";
import image_3 from "../images/3.jpg";
import image_4 from "../images/4.png";
import image_5 from "../images/5.jpg";

function Main() {
  const [isLogin2, setIsLogin2] = useState(false);
  let isLogin = useSelector((state) => state.userInfo.isLogin);
  const history = useHistory();
  const startButton = () => {
    if (isLogin == true) {
      history.push("/projectadd");
    } else {
      setIsLogin2(true);
    }
  };
  const handleClose = () => {
    setIsLogin2(false);
  };
  return (
    <Ground>
      {isLogin2 ? (
        <LoginPopup handleClose={handleClose} setIsLogin2={setIsLogin2} />
      ) : null}
      <Container_0>
        <Background_img_box>
          <Background_img src="https://user-images.githubusercontent.com/87626152/165377408-e7a13c11-2a21-4ad1-b98d-aa66149814a8.jpg" />
        </Background_img_box>
        <Container_0_box></Container_0_box>
        <Container_0_box>
          <Content_0_box_1>
            <Content_0_title_0>Code</Content_0_title_0>
            <Content_0_title_1>Cooperation</Content_0_title_1>
          </Content_0_box_1>
          <Content_0_p>
            팀을 어디서 구할지 막막 하신가요?
            <br /> 지금 CodeCooperation 에서 시작해보세요!
          </Content_0_p>
          <Content_0_button_box_0>
            <Content_0_button_0 onClick={startButton}>
              시작하기
            </Content_0_button_0>
          </Content_0_button_box_0>
        </Container_0_box>
        <Container_0_box>
          <Content_0_img_0 />
        </Container_0_box>
        <Container_0_box></Container_0_box>
      </Container_0>

      <Container_3>
        <Content_3_0>
          <Content_3_p_0>Code Cooperation을 통해</Content_3_p_0>
          <br />
          <Content_3_p_0>빠르게 프로젝트 팀을 꾸려보세요!</Content_3_p_0>
        </Content_3_0>
      </Container_3>

      <Container_2>
        <Container_2_2>
          <Content_2_img_box>
            <Cotent_2_img alt="about"></Cotent_2_img>
          </Content_2_img_box>
          <Content_2_box>
            <Content_2_title>
              원하는 프로젝트에
              <br />
              참여하세요
            </Content_2_title>
            <Content_2_p>
              Code Cooperation 에서는 다양한
              <br />
              프로젝트를 모집하고있어요 마음에 맞는 팀에 지원해보세요
            </Content_2_p>
            <Content_2_button_box>
              <Link to="/projectlist">
                <Content_2_button>게시판 둘러보기</Content_2_button>
              </Link>
            </Content_2_button_box>
          </Content_2_box>
        </Container_2_2>
      </Container_2>

      <Container_4>
        <Container_4_2>
          <Content_4_box>
            <Content_4_title>
              원하는 프로젝트를
              <br />
              만들어 보세요
            </Content_4_title>
            <Content_4_p>
              원하는 프로젝트를 찾지 못하셨나요?
              <br />
              직접 프로젝트를 생성해 팀을 모집해 보세요!
            </Content_4_p>
            <Content_4_button_box>
              <Content_4_button onClick={startButton}>
                프로젝트 시작
              </Content_4_button>
            </Content_4_button_box>
          </Content_4_box>
          <Content_4_img_box>
            <Cotent_4_img alt="about"></Cotent_4_img>
          </Content_4_img_box>
        </Container_4_2>
      </Container_4>
      <Container_5>
        <Container_5_2>
          <Content_5_title_box>
            <Content_5_title>
              Code Cooperation 사용자들은 어떻게 생각할까요?
            </Content_5_title>
          </Content_5_title_box>
          <Content_5_review_box>
            <Content_5_review_box_1>
              <Content_5_review_box_2>
                <Content_5_review_title_box>
                  <Content_5_review_title_image_box>
                    <Content_5_review_title_image_box_2>
                      <Content_5_review_title_image></Content_5_review_title_image>
                    </Content_5_review_title_image_box_2>
                  </Content_5_review_title_image_box>
                  <Content_5_review_title_p_box>
                    <Content_5_review_title_p>
                      Elon Musk <br /> ⭐️⭐️⭐️⭐️⭐️
                    </Content_5_review_title_p>
                  </Content_5_review_title_p_box>
                </Content_5_review_title_box>
                <Content_5_review_p_box>
                  <Content_5_review_p>
                    Code Cooperation을 이용하여 제가 원하는 스택을 골라서 팀에
                    들어가서 개발을 진행할 수 있어서 좋았습니다.
                  </Content_5_review_p>
                </Content_5_review_p_box>
              </Content_5_review_box_2>
            </Content_5_review_box_1>

            <Content_5_review_box_1>
              <Content_5_review_box_2>
                <Content_5_review_title_box>
                  <Content_5_review_title_image_box>
                    <Content_5_review_title_image_box_2>
                      <Content_5_review_title_image></Content_5_review_title_image>
                    </Content_5_review_title_image_box_2>
                  </Content_5_review_title_image_box>
                  <Content_5_review_title_p_box>
                    <Content_5_review_title_p>
                      Elon Musk <br /> ⭐️⭐️⭐️⭐️⭐️
                    </Content_5_review_title_p>
                  </Content_5_review_title_p_box>
                </Content_5_review_title_box>
                <Content_5_review_p_box>
                  <Content_5_review_p>
                    Code Cooperation을 이용하여 제가 원하는 스택을 골라서 팀에
                    들어가서 개발을 진행할 수 있어서 좋았습니다.
                  </Content_5_review_p>
                </Content_5_review_p_box>
              </Content_5_review_box_2>
            </Content_5_review_box_1>

            <Content_5_review_box_1>
              <Content_5_review_box_2>
                <Content_5_review_title_box>
                  <Content_5_review_title_image_box>
                    <Content_5_review_title_image_box_2>
                      <Content_5_review_title_image></Content_5_review_title_image>
                    </Content_5_review_title_image_box_2>
                  </Content_5_review_title_image_box>
                  <Content_5_review_title_p_box>
                    <Content_5_review_title_p>
                      Elon Musk <br /> ⭐️⭐️⭐️⭐️⭐️
                    </Content_5_review_title_p>
                  </Content_5_review_title_p_box>
                </Content_5_review_title_box>
                <Content_5_review_p_box>
                  <Content_5_review_p>
                    Code Cooperation을 이용하여 제가 원하는 스택을 골라서 팀에
                    들어가서 개발을 진행할 수 있어서 좋았습니다.
                  </Content_5_review_p>
                </Content_5_review_p_box>
              </Content_5_review_box_2>
            </Content_5_review_box_1>
          </Content_5_review_box>
        </Container_5_2>
      </Container_5>

      {/* <Container_1>
        <Container_1_img></Container_1_img>
        <Cotent_1>
          <Content_1_p>
            팀이 매칭되셨다면 채팅을 통해 협업을 진행 해보세요!
          </Content_1_p>
        </Cotent_1>
      </Container_1> */}

      <Container_6>
        <Content_6_box>
          <Content_6_title_box>
            <Content_6_title>
              지금 CodeCooperation 을 통해 <br />
              프로젝트를 시작해보세요!
            </Content_6_title>
          </Content_6_title_box>
          <Content_6_img_box>
            <Content_6_img></Content_6_img>
          </Content_6_img_box>
          <Content_6_button_box>
            <Link to="/projectlist">
              <Content_6_button>시작하기</Content_6_button>
            </Link>
          </Content_6_button_box>
        </Content_6_box>
      </Container_6>
    </Ground>
  );
}

export default Main;

/*************Container_0 부분************/
const Ground = styled.div`
  padding: 45px 0 0 0;
  /* border: 1px solid red; */
`;

const Container_0 = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */

  /* border: 1px solid lightgray; */
  width: 100%;
  height: 30rem;
`;

const Container_0_box = styled.div`
  /* border: 1px solid lightgray; */
  height: 100%;
  flex: 1;
`;
const Background_img_box = styled.div`
  position: absolute;
  width: 100%;
  height: 30rem;
  object-fit: cover;
  overflow: hidden;

  z-index: -2;
`;

const Background_img = styled.img.attrs({})`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  padding: 50px 0 0 0;
  transform: translateZ(0);
  backface-visibility: hidden;
  z-index: -2;
`;

const Content_0_img_0 = styled.img.attrs({
  src: `${image_1}`,
})`
  position: sticky;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
  backface-visibility: hidden;
  position: sticky;
  z-index: -1;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Content_0_box_1 = styled.div`
  padding: 10rem 0 0 0;
  display: inline-block;
  line-height: 3rem;

  /* border: 1px solid red; */
`;
const Content_0_title_0 = styled.div`
  font-size: 3rem;
  font-weight: 1000;
  font-family: "Noto Sans KR";
  /* color: #8fdad6; */
  color: #383c58;
`;
const Content_0_title_1 = styled.div`
  font-size: 2rem;
  padding: 0 0 0 4px;
  font-weight: 800;
  font-family: "Noto Sans KR";
  /* color: #383c58; */

  color: #3e4e6d;
`;

const Content_0_p = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  padding: 10px 0 0 6px;
  color: rgb(134, 142, 150);
  /* color: #e1e8ec; */
`;
const Content_0_button_box_0 = styled.div`
  margin: 30px 0px 0px 10px;
`;

const Content_0_button_0 = styled.div`
  font-family: "Noto Sans KR";
  border: 0px;
  background-color: #56d0a0;
  /* background-color: #8ce7d9; */
  color: white;
  border-radius: 1rem;
  width: 15rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  cursor: pointer;
`;
/*********************************************/

/*************Container_1 부분************/
/* const Container_1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  justify-content: center
  width: 100%;
  height: 50rem;
  margin: 0;
`;
const Container_1_img = styled.img.attrs({
  src: ``,
})`
  width: 50%;
  height: 80%;
  border: 1px solid lightgray;
  border-radius: 1rem;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const Cotent_1 = styled.div`
  margin: 2rem 0 0 0;
  border: 1px solid lightgray;
  width: 50%;
  height: 3rem;
`;

const Content_1_p = styled.div`
  color: rgb(72, 72, 72);
  text-align: center;
  font-size: 1.7rem;
  font-family: "paybooc-Light";
  line-height: 3rem;
`; */

/******************************/

/*************Container_2 부분************/
const Container_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid lightgray; */
  justify-content: center;
  width: 100%;
  height: 50rem;
  margin: 0;
  @media screen and (max-width: 1000px) {
    height: auto;
  }
`;

const Container_2_2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 88%;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
  /* border: 1px solid lightgray; */
`;

const Content_2_img_box = styled.div`
  width: 70%;
  height: 100%;
`;

const Cotent_2_img = styled.img.attrs({
  src: `${image_2}`,
})`
  position: sticky;
  z-index: -1;
  transform: translateZ(0);
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
`;
const Content_2_box = styled.div`
  width: 30%;
  /* border: 1px solid lightgray; */
  height: 100%;
  @media screen and (max-width: 1000px) {
    margin-top: 0;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
  }
`;

const Content_2_title = styled.div`
  font-size: 2rem;
  font-weight: 900;
  font-family: "Noto Sans KR";
  margin: 12rem 0 0 0;
  @media screen and (max-width: 1000px) {
    margin-top: 0;
  }
`;

const Content_2_p = styled.div`
  margin: 1rem 0 0 0;
  font-size: 1rem;
  font-family: "Noto Sans KR";
  color: rgb(134, 142, 150);
  @media screen and (max-width: 1000px) {
    width: 300px;
  }
`;

const Content_2_button_box = styled.div`
  margin: 2rem 0 0 0;
`;

const Content_2_button = styled.button`
  font-family: "Noto Sans KR";
  border: 0px;
  background-color: #56d0a0;
  color: white;
  border-radius: 1rem;
  width: 10rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 110px;
  }
`;

/*********************************/

/*************Container_3 부분************/

const Container_3 = styled.div`
  width: 100%;
  height: 20rem;
  /* border: 1px solid lightgray; */
`;

const Content_3_0 = styled.div`
  text-align: center;
  margin: 7rem 0 0 0;
`;
const Content_3_p_0 = styled.div`
  color: rgb(72, 72, 72);
  font-size: 2rem;
  font-size: 1.7rem;
  font-family: "paybooc-Light";
`;

const Container_4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid lightgray; */
  justify-content: center;
  width: 100%;
  height: 50rem;
  margin: 0;
  @media screen and (max-width: 1000px) {
    margin-bottom: 200px;
  }
`;

const Container_4_2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 88%;
  /* border: 1px solid lightgray; */
  @media screen and (max-width: 1000px) {
    height: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    flex-direction: column;
    align-items: center;
  }
`;

const Content_4_img_box = styled.div`
  width: 70%;
  height: 100%;
`;

const Cotent_4_img = styled.img.attrs({
  src: `${image_3}`,
})`
  position: sticky;
  z-index: -1;
  transform: translateZ(0);
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
`;
const Content_4_box = styled.div`
  width: 30%;
  /* border: 1px solid lightgray; */
  height: 100%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Content_4_title = styled.div`
  font-size: 2rem;
  /* text-align: center; */
  font-weight: 900;
  font-family: "Noto Sans KR";
  margin: 12rem 0 0 0;
`;

const Content_4_p = styled.div`
  margin: 1rem 0 0 0;
  font-size: 1rem;
  font-family: "Noto Sans KR";
  color: rgb(134, 142, 150);
`;

const Content_4_button_box = styled.div`
  margin: 2rem 0 0 0;
`;

const Content_4_button = styled.button`
  font-family: "Noto Sans KR";
  border: 0px;
  background-color: #56d0a0;
  color: white;
  border-radius: 1rem;
  width: 10rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 110px;
  }
`;

/***********리뷰 사용자 CSS *********/

const Container_5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid lightgray; */
  justify-content: center;
  width: 100%;
  height: 40rem;
  margin: 0;
`;

const Container_5_2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 100%;
  /* border: 1px solid lightgray; */
`;

const Content_5_title_box = styled.div`
  width: 100%;
  height: 10rem;
  /* border: 1px solid lightgray; */
`;
const Content_5_title = styled.p`
  font-size: 2rem;
  /* line-height: 10rem; */
  text-align: center;
  font-weight: 900;
  font-family: "Noto Sans KR";
  @media screen and (max-width: 800px) {
    width: auto;
    height: 100px;
    font-weight: 600;
    font-size: 30px;
  }
`;

const Content_5_review_box = styled.div`
  display: flex;
  /* border: 1px solid lightgray; */
  width: 100%;
  height: 50%;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Content_5_review_box_1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid lightgray; */
  flex: 1;
`;

const Content_5_review_box_2 = styled.div`
  width: 80%;
  height: 18rem;
  border-radius: 10px;
  box-shadow: 0 0px 23px rgba(50, 50, 93, 0.2);
  line-height: 100%;
  @media screen and (max-width: 800px) {
    height: 150px;
  }
`;

const Content_5_review_title_box = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  /* border: 1px solid lightgray; */
`;

const Content_5_review_title_image_box = styled.div`
  width: 30%;
  height: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }
  /* border: 1px solid lightgray; */
`;
const Content_5_review_title_image_box_2 = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid lightgray; */
`;

const Content_5_review_title_image = styled.img.attrs({
  src: `${image_4}`,
})`
  position: sticky;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const Content_5_review_title_p_box = styled.div`
  width: 70%;
  height: 100%;
`;

const Content_5_review_title_p = styled.div`
  padding: 15px 0 0 10px;
  font-family: "Noto Sans KR ";
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
  @media screen and (max-width: 800px) {
    font-weight: 500;
    font-size: 1rem;
    padding: 0;
  }
`;

const Content_5_review_p_box = styled.div`
  width: 100%;
  height: 75%;
  /* border: 1px solid lightgray; */
`;

const Content_5_review_p = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 10px 0 10px;
  font-weight: 0;
  font-size: 0.9rem;
  font-family: "Noto Sans KR";
  line-height: 1.5rem;
  color: rgb(134, 142, 150);
`;

/************************/

const Container_6 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid lightgray; */
  width: 100%;
  height: 70rem;
  margin: auto;
  @media screen and (max-width: 1000px) {
    height: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const Content_6_box = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;

  /* border: 1px solid lightgray; */
`;

const Content_6_title_box = styled.div`
  display: flex;
  width: auto;
  height: 20%;
  /* border: 1px solid lightgray; */
  justify-content: center;
  align-items: center;
`;

const Content_6_title_box_2 = styled.div`
  width: 100%;
  height: 50%;
  /* border: 1px solid lightgray; */
`;

const Content_6_title = styled.div`
  width: 100%;
  font-family: "Noto Sans KR";
  font-size: 1.5rem;
  font-weight: 900;
  /* border: 1px solid lightgray; */
  text-align: center;
  line-height: 3rem;
`;

const Content_6_img_box = styled.div`
  position: relative;
  max-width: 100%;
  height: 70%;
  margin: auto;
`;

const Content_6_img = styled.img.attrs({
  src: `${image_5}`,
})`
  position: sticky;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Content_6_button_box = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content_6_button = styled.button`
  font-family: "Noto Sans KR";
  border: 0px;
  background-color: #56d0a0;
  color: white;
  border-radius: 1rem;
  width: 10rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
`;
