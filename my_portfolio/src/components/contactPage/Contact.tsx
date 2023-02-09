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
  ContactTextDesc,
  ContactItemCont,
  ContactDescCont,
  ContactItemTittle,
  ContactItemText,
} from "./contactStyles";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";

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

          <ContactTextDesc>
            Always available for freelance work if the right project comes along
            or job prospects, Feel free to contact me!
          </ContactTextDesc>

          <ContactItemCont>
            <PersonPinRoundedIcon sx={{ fontSize: "2.5rem" }} />
            <ContactDescCont>
              <ContactItemTittle>Name:</ContactItemTittle>
              <ContactItemText>Lawrence Ogereka</ContactItemText>
            </ContactDescCont>
          </ContactItemCont>

          <ContactItemCont>
            <LocationCityRoundedIcon sx={{ fontSize: "2.5rem" }} />
            <ContactDescCont>
              <ContactItemTittle>Location:</ContactItemTittle>
              <ContactItemText>Lagos, Nigeria</ContactItemText>
            </ContactDescCont>
          </ContactItemCont>

          <ContactItemCont>
            <CallRoundedIcon sx={{ fontSize: "2.5rem" }} />
            <ContactDescCont>
              <ContactItemTittle>Call Me:</ContactItemTittle>
              <ContactItemText>+234 704 622 0065</ContactItemText>
            </ContactDescCont>
          </ContactItemCont>

          <ContactItemCont>
            <MarkEmailReadRoundedIcon sx={{ fontSize: "2.5rem" }} />
            <ContactDescCont>
              <ContactItemTittle>Email Me:</ContactItemTittle>
              <ContactItemText>lawrenceanthony70@gmail.com</ContactItemText>
            </ContactDescCont>
          </ContactItemCont>
        </ContactAddressCont>

        <ContactFormCont></ContactFormCont>
      </ContactContainer>
    </MainContainer>
  );
}

export default Contact;
