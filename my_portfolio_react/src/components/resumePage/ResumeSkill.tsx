import React from "react";

import {
  HeaderTopTitle,
  HeaderLargeTitle,
} from "../../GlobalStyles/commonStyle";

import {
  ResumeSkillCont,
  SkillItemsCont,
  SkillItemCont,
  SkillItemImage,
  SkillItemName,
} from "./resumestyles";

function ResumeSkill() {
  return (
    <ResumeSkillCont>
      <HeaderTopTitle>List of programming tools i know and use</HeaderTopTitle>
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
  );
}

export default ResumeSkill;
