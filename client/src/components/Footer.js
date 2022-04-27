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
          <Title>CONTACT</Title>
          <Contact>Send inquire</Contact>
        </ContactDiv>
        <AboutUsDiv>
          <Title>ABOUT US</Title>
          <ListDiv>
            <Repository
              href="https://github.com/codestates/CodeCooperation"
              target="_blank"
            >
              Repository
            </Repository>
          </ListDiv>
          <ListDiv>
            <Wiki
              href="https://github.com/codestates/CodeCooperation/wiki"
              target="_blank"
            >
              Wiki
            </Wiki>
          </ListDiv>
        </AboutUsDiv>
        <TeamMemberDiv>
          <Title>TEAM MEMBER</Title>
          <ListDiv>✔️Front</ListDiv>
          <ListDiv>
            <Name href="https://github.com/ghooman" target="_blank">
              박지후
            </Name>
            <Name href="https://github.com/VRSoda" target="_blank">
              전용남
            </Name>
          </ListDiv>
          <ListDiv>✔️Back</ListDiv>
          <ListDiv>
            <Name>황시우</Name>
            <Name href="https://github.com/LEEJAESHIN" target="_blank">
              이재신
            </Name>
          </ListDiv>
          <DesignDiv>Designed by Freepik</DesignDiv>
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
  /* @media screen and (max-width: 750px) {
    width: 35%;
  } */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
`;

const Logo = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  text-decoration-line: none;
`;

const MenuDiv = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
`;

const ContactDiv = styled.div`
  font-weight: 600;
  margin: 20px 0;
  /* background-color: yellow; */
`;
const AboutUsDiv = styled(ContactDiv)``;
const TeamMemberDiv = styled(ContactDiv)``;

const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

const Contact = styled.div`
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;

const ListDiv = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Repository = styled.a`
  text-decoration-line: none;
  color: black;
  font-size: 18px;
  font-weight: 300;
`;
const Wiki = styled(Repository)``;

const Name = styled.a`
  margin-right: 10px;
  text-decoration-line: none;
  color: black;
  font-size: 18px;
  font-weight: 300;
`;

const DesignDiv = styled.div`
  margin-top: 30px;
`;

export default Footer;
