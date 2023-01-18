import React from "react";
import {} from "./aboutStyles";
import { usePortfolioGlobalContext } from "../../context/PortfolioContext";
import {
  ReturnBtnCont,
  ReturnBtn,
  MainContainer,
  HeaderContainer,
  HeaderTopTitle,
  HeaderLargeTitle,
  HeaderTitleUnderline,
} from "../../GlobalStyles/commonStyle";
import {
  AboutContainer,
  AboutVisualContainer,
  AboutDetailContainer,
  AboutAsk,
  AboutResponse,
  AboutParagraph,
} from "./aboutStyles";

function About() {
  let { dispatch } = usePortfolioGlobalContext();

  return (
    <>
      <MainContainer>
        <ReturnBtnCont>
          <ReturnBtn
            to="/"
            onClick={() => {
              dispatch({ type: "SET_TRANSITION_DOWN" });
            }}
          >
            x
          </ReturnBtn>
        </ReturnBtnCont>
        <HeaderContainer>
          <HeaderTopTitle>Get to know me</HeaderTopTitle>
          <HeaderLargeTitle>About Me</HeaderLargeTitle>
          <HeaderTitleUnderline />
        </HeaderContainer>

        <AboutContainer>
          <AboutVisualContainer></AboutVisualContainer>
          <AboutDetailContainer>
            <AboutAsk>Who am i?</AboutAsk>
            <AboutResponse>
              I'm a Software Engineer and Web developer
            </AboutResponse>
            <AboutParagraph>
              I am a freelancer based in the United Kingdom and i have been
              building noteworthy UX/UI designs and websites for years, which
              comply with the latest design trends. I help convert a vision and
              an idea into meaningful and useful products. Having a sharp eye
              for product evolution helps me prioritize tasks, iterate fast and
              deliver faster.
            </AboutParagraph>
          </AboutDetailContainer>
        </AboutContainer>
      </MainContainer>
    </>
  );
}

export default About;
