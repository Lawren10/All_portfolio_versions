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
} from "../../GlobalStyles/commonStyle";

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
        </HeaderContainer>
      </MainContainer>
    </>
  );
}

export default About;
