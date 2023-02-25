import React from "react";
import {
  ReturnBtn,
  MainContainer,
  HeaderContainer,
  HeaderTopTitle,
  HeaderLargeTitle,
  HeaderTitleUnderline,
} from "../../GlobalStyles/commonStyle";

import {
  PortfolioItemContainer,
  PortfolioItem,
  PortfolioItemImg,
  PortfolioItemOverlay,
  ViewBtn,
} from "./portfolioStyles";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { usePortfolioGlobalContext } from "../../context/PortfolioContext";

function Portfolio() {
  let { dispatch } = usePortfolioGlobalContext();
  return (
    <MainContainer>
      <ReturnBtn
        to="/"
        onClick={() => {
          dispatch({ type: "SET_TRANSITION_DOWN" });
        }}
      >
        <CloseRoundedIcon sx={{ fontSize: "2.5rem" }} />
      </ReturnBtn>
      <HeaderContainer>
        <HeaderTopTitle>Showcasing some of my work</HeaderTopTitle>
        <HeaderLargeTitle>Portfolio</HeaderLargeTitle>
        <HeaderTitleUnderline />
      </HeaderContainer>

      <HeaderContainer>
        <HeaderTopTitle>My work</HeaderTopTitle>
      </HeaderContainer>

      <PortfolioItemContainer>
        <PortfolioItem>
          <PortfolioItemOverlay>
            <ViewBtn>View</ViewBtn>
          </PortfolioItemOverlay>
          <PortfolioItemImg src="/images/javascript.png" />
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioItemOverlay>
            <ViewBtn></ViewBtn>
          </PortfolioItemOverlay>
          <PortfolioItemImg src="/images/javascript.png" />
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioItemOverlay>
            <ViewBtn></ViewBtn>
          </PortfolioItemOverlay>
          <PortfolioItemImg src="/images/javascript.png" />
        </PortfolioItem>
      </PortfolioItemContainer>
    </MainContainer>
  );
}

export default Portfolio;
