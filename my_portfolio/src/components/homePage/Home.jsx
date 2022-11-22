import React from "react";
import Navigation from "../navigation/Navigation";
import {
  HomeContainer,
  Avatar,
  DescContainer,
  Name,
  JobTitle,
  IconsContainer,
  Icon,
} from "./homeStyles";

function Home() {
  return (
    <>
      <Navigation />
      <HomeContainer>
        <Avatar src="/images/portfolioavatar.png" />
        <DescContainer>
          <Name>Lawrence Ogereka</Name>
          <JobTitle>Software Developer</JobTitle>
          <IconsContainer>
            <Icon />
          </IconsContainer>
        </DescContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
