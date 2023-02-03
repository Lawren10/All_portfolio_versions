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
  ContactContainer,
  ContactHeader,
  ContactFormCont,
  ContactAddressCont,
} from "./contactStyles";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Contact() {
  let { dispatch } = usePortfolioGlobalContext();
  return (
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
        <HeaderTopTitle>Feel free to contact me anytime</HeaderTopTitle>
        <HeaderLargeTitle>Get in Touch</HeaderLargeTitle>
        <HeaderTitleUnderline />
      </HeaderContainer>

      <ContactContainer>
        <ContactAddressCont>
          <ContactHeader align="false">Contact Info</ContactHeader>
        </ContactAddressCont>
        <ContactFormCont>
          <ContactHeader align="true">Message Me</ContactHeader>
        </ContactFormCont>
      </ContactContainer>
    </MainContainer>
  );
}

export default Contact;
