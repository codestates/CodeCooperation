import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import javaImg from "../images/java.png";
import javascriptImg from "../images/javascript.png";
import reactImg from "../images/react.png";
import pythonImg from "../images/python.png";
import nodejsImg from "../images/nodejs.png";
import cImg from "../images/c++.png";
import flaskImg from "../images/flask.png";
import djangoImg from "../images/django.svg";
import vueImg from "../images/vue.png";
import springImg from "../images/spring.png";
import phpImg from "../images/php.png";
import swiftImg from "../images/swift.png";
import kotlinImg from "../images/kotlin.png";
import typescriptImg from "../images/typescript.png";
const PostStackImg = ({ stack }) => {
  const [stacks, setStacks] = React.useState(0);
  const [Stacklist, setStackList] = React.useState([
    {
      id: "React",
      img: reactImg,
      active: false,
    },
    {
      id: "Java",
      img: javaImg,
      active: false,
    },
    {
      id: "JavaScript",
      img: javascriptImg,
      active: false,
    },
    {
      id: "Python",
      img: pythonImg,
      active: false,
    },
    {
      id: "Node",
      img: nodejsImg,
      active: false,
    },
    {
      id: "C++",
      img: cImg,
      active: false,
    },
    {
      id: "Flask",
      img: flaskImg,
      active: false,
    },
    {
      id: "Django",
      img: djangoImg,
      active: false,
    },
    {
      id: "Vue",
      img: vueImg,
      active: false,
    },
    {
      id: "Spring",
      img: springImg,
      active: false,
    },
    {
      id: "php",
      img: phpImg,
      active: false,
    },
    {
      id: "Swift",
      img: swiftImg,
      active: false,
    },
    {
      id: "Kotlin",
      img: kotlinImg,
      active: false,
    },
    {
      id: "TypeScript",
      img: typescriptImg,
      active: false,
    },
  ]);
  React.useEffect(() => {
    Stacklist.map((item) => {
      if (item.id === stack) {
        setStacks(item.img);
      }
    });
  }, []);
  return (
    <>
      {stacks && (
        <ImgBox>
          <Img src={stacks} />
        </ImgBox>
      )}
    </>
  );
};

const Img = styled.img`
  width: 90%;
  height: 90%;
  transform: translateZ(0);
  backface-visibility: hidden;
`;
const ImgBox = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  /* border: 1px solid lightgray; */
`;
export default PostStackImg;
