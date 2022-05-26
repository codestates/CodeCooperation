import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrap>
      <LogoDiv>
        <Logo>CodeCooperation</Logo>
      </LogoDiv>
      <MenuDiv>
        <ContactDiv>
          <Title>REFERENCE</Title>
          <Reference href="https://www.freepik.com/" target="_blank">
            DESIGNED BY FREEPIK
          </Reference>
        </ContactDiv>
        <AboutUsDiv>
          <Title>ABOUT US</Title>
          <ListDiv>
            <Repository
              href="https://github.com/codestates/CodeCooperation"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i> Github
            </Repository>
          </ListDiv>
          <ListDiv>
            <Wiki
              href="https://codestates.notion.site/11-CC-CodeCooperation-360611bacce041d384d7d8bf13cb1b6e"
              target="_blank"
            >
              <Notionimg src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778642/noticon/kjaaizycfgz017qxvlnu.png"></Notionimg>{" "}
              Notion
            </Wiki>
          </ListDiv>
        </AboutUsDiv>
        <TeamMemberDiv>
          <Title>TEAM MEMBER</Title>
          <ListDiv>Front</ListDiv>
          <ListDiv>
            <Name href="https://github.com/ghooman" target="_blank">
              박지후
            </Name>
            <Name href="https://github.com/LEEJAESHIN" target="_blank">
              이재신
            </Name>
          </ListDiv>
          <ListDiv>Back</ListDiv>
          <ListDiv>
            <Name href="https://github.com/nicesiu" target="_blank">
              황시우
            </Name>
          </ListDiv>
        </TeamMemberDiv>
      </MenuDiv>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  max-width: 1000px;
  width: 100vw;
  margin: auto;
  /* background-color: green; */
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  color: #383c58;
  text-align: center;
  text-decoration-line: none;
`;

const MenuDiv = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const ContactDiv = styled.div`
  font-weight: 600;
  margin: 20px 0;
  width: 155px;
  /* background-color: yellow; */
`;
const AboutUsDiv = styled(ContactDiv)``;
const TeamMemberDiv = styled(ContactDiv)``;

const Title = styled.p`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  color: rgb(68 68 68);

  text-decoration-line: none;
`;

const Reference = styled.a`
  font-family: Noto Sans KR;
  text-decoration-line: none;
  color: rgb(119 119 119);
  font-size: 15px;
  font-weight: 500;
  &:hover {
    font-weight: 500;
    transition: 0s ease;
    color: black;
  }
  cursor: pointer;
`;

const ListDiv = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Repository = styled.a`
  text-decoration-line: none;
  color: black;
  font-size: 18px;
  font-weight: 300;
  &:hover {
    font-weight: 500;
    transition: 0s ease;
  }
`;
const Wiki = styled(Repository)``;

const Name = styled.a`
  margin-right: 10px;
  text-decoration-line: none;
  color: black;
  font-size: 17px;
  font-weight: 300;
  &:hover {
    font-weight: 500;
    transition: 0s ease;
  }
`;
const Notionimg = styled.img`
  width: 15px;
  height: 15px;
`;

export default Footer;
