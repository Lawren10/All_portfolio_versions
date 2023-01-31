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
  ResumeSkillCont,
  SkillItemsCont,
  SkillItemCont,
  SkillItemImage,
  SkillItemName,
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

      <ResumeSkillCont>
        <HeaderTopTitle>
          List of programming tools i know and use
        </HeaderTopTitle>
        <HeaderLargeTitle>Skill set</HeaderLargeTitle>

        <SkillItemsCont>
          <SkillItemCont>
            <SkillItemImage src="/images/html.png" />
            <SkillItemName>HTML5</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/css3.png" />
            <SkillItemName>CSS3</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/sass.png" />
            <SkillItemName>SASS</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/javascript.png" />
            <SkillItemName>JAVASCRIPT</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/typescript.png" />
            <SkillItemName>TYPESCRIPT</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/react.png" />
            <SkillItemName>REACT</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/node-js.png" />
            <SkillItemName>NODE</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/python.png" />
            <SkillItemName>PYTHON</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/mongodb.png" />
            <SkillItemName>MONGODB</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/mysql.png" />
            <SkillItemName>MY-SQL</SkillItemName>
          </SkillItemCont>

          <SkillItemCont>
            <SkillItemImage src="/images/graphql.png" />
            <SkillItemName>GRAPH-QL</SkillItemName>
          </SkillItemCont>
        </SkillItemsCont>
      </ResumeSkillCont>
    </MainContainer>
  );
}

export default Resume;
