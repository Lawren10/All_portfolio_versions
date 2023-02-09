import React from "react";
import { usePortfolioGlobalContext } from "../../context/PortfolioContext";
import {
  // ReturnBtnCont,
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
  AboutImage,
  AboutDetailContainer,
  AboutAsk,
  AboutResponse,
  AboutParagraph,
  AddressContainer,
  AddressItemCont,
  AddressItemTittle,
  AddressItemText,
  AddressSocialItemCont,
  DownloadCvBtn,
} from "./aboutStyles";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function About() {
  let { dispatch } = usePortfolioGlobalContext();

  return (
    <>
      <MainContainer>
        <ReturnBtn
          to="/"
          onClick={() => {
            dispatch({ type: "SET_TRANSITION_DOWN" });
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: "2.5rem", fontWeight: 100 }} />
        </ReturnBtn>

        <HeaderContainer>
          <HeaderTopTitle>Get to know me</HeaderTopTitle>
          <HeaderLargeTitle>About Me</HeaderLargeTitle>
          <HeaderTitleUnderline />
        </HeaderContainer>

        <AboutContainer>
          <AboutVisualContainer>
            <AboutImage></AboutImage>
          </AboutVisualContainer>
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

            <AddressContainer>
              <AddressItemCont>
                <AddressItemTittle>Name:</AddressItemTittle>
                <AddressItemText>Lawrence Ogereka</AddressItemText>
              </AddressItemCont>

              <AddressItemCont>
                <AddressItemTittle>Email:</AddressItemTittle>
                <AddressItemText>lawrenceanthony70@gmail.com</AddressItemText>
              </AddressItemCont>
            </AddressContainer>

            <AddressContainer>
              <AddressItemCont>
                <AddressItemTittle>From:</AddressItemTittle>
                <AddressItemText>Nigeria</AddressItemText>
              </AddressItemCont>

              <AddressItemCont>
                <AddressItemTittle>Socials:</AddressItemTittle>
                <AddressSocialItemCont>
                  <FacebookIcon />
                  <TwitterIcon />
                  <LinkedInIcon />
                  <GitHubIcon />
                </AddressSocialItemCont>
              </AddressItemCont>
            </AddressContainer>

            <DownloadCvBtn>Download Cv</DownloadCvBtn>
          </AboutDetailContainer>
        </AboutContainer>
      </MainContainer>
    </>
  );
}

export default About;
