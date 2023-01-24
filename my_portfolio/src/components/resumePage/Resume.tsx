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
  ResumeContainer,
  ResumeContHeader,
  ResumeItemHeader,
  ResumeEducationCont,
  ResumeExperinceCont,
  ResumeItem,
  ResumeItemPointer,
  ResumeItemDetails,
  ResumeItemDescription,
} from "./resumestyles";

import { usePortfolioGlobalContext } from "../../context/PortfolioContext";

function Resume() {
  let { dispatch } = usePortfolioGlobalContext();
  return (
    <MainContainer>
      <ReturnBtn
        to="/"
        onClick={() => {
          dispatch({ type: "SET_TRANSITION_DOWN" });
        }}
      >
        x
      </ReturnBtn>
      <HeaderContainer>
        <HeaderTopTitle>Check out my Resume</HeaderTopTitle>
        <HeaderLargeTitle>Resume</HeaderLargeTitle>
        <HeaderTitleUnderline />
      </HeaderContainer>

      <ResumeContainer>
        <ResumeEducationCont>
          <ResumeContHeader>Education</ResumeContHeader>

          <ResumeItem>
            <ResumeItemPointer />
            <ResumeItemHeader>Computer Science</ResumeItemHeader>
            <ResumeItemDetails>
              Cambridge University / 2004 - 2007
            </ResumeItemDetails>
            <ResumeItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              quo repudiandae.
            </ResumeItemDescription>
          </ResumeItem>

          <ResumeItem>
            <ResumeItemPointer />
            <ResumeItemHeader>Computer Science</ResumeItemHeader>
            <ResumeItemDetails>
              Cambridge University / 2004 - 2007
            </ResumeItemDetails>
            <ResumeItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              quo repudiandae.
            </ResumeItemDescription>
          </ResumeItem>

          <ResumeItem>
            <ResumeItemPointer />
            <ResumeItemHeader>Computer Science</ResumeItemHeader>
            <ResumeItemDetails>
              Cambridge University / 2004 - 2007
            </ResumeItemDetails>
            <ResumeItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              quo repudiandae.
            </ResumeItemDescription>
          </ResumeItem>
        </ResumeEducationCont>

        <ResumeExperinceCont>
          <ResumeContHeader>Experience</ResumeContHeader>
          <ResumeItem>
            <ResumeItemPointer />
            <ResumeItemHeader>Software Engineer</ResumeItemHeader>
            <ResumeItemDetails>Adobe / 2015 - 2017</ResumeItemDetails>
            <ResumeItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              quo repudiandae.
            </ResumeItemDescription>
          </ResumeItem>

          <ResumeItem>
            <ResumeItemPointer />
            <ResumeItemHeader>Software Engineer</ResumeItemHeader>
            <ResumeItemDetails>Adobe / 2015 - 2017</ResumeItemDetails>
            <ResumeItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              quo repudiandae.
            </ResumeItemDescription>
          </ResumeItem>

          <ResumeItem>
            <ResumeItemPointer />
            <ResumeItemHeader>Software Engineer</ResumeItemHeader>
            <ResumeItemDetails>Adobe / 2015 - 2017</ResumeItemDetails>
            <ResumeItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              quo repudiandae.
            </ResumeItemDescription>
          </ResumeItem>
        </ResumeExperinceCont>
      </ResumeContainer>
    </MainContainer>
  );
}

export default Resume;
