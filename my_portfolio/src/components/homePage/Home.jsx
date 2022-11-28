import React, {useEffect} from "react";
import Navigation from "../navigation/Navigation";

import {
  HomeContainer,
  Avatar,
  DescContainer,
  Name,
  JobTitle,
  IconsContainer,
  Icon,
  SocialIconsContainer,
} from "./homeStyles";
import {usePortfolioGlobalContext} from "../../context/PortfolioContext";

function Home() {
  let {state, dispatch} = usePortfolioGlobalContext();

  useEffect(() => {
    dispatch({type: "SET_TRANSITION_DOWN"});
  }, []);

  return (
    <>
      <HomeContainer>
        <Navigation />
        <Avatar src="/images/portfolioavatar.png" />
        <DescContainer>
          <Name>Lawrence Ogereka</Name>
          <JobTitle>Software Developer</JobTitle>
          <IconsContainer>
            <Icon
              src="/images/html.png"
              onClick={() => {
                // dispatch();
              }}
            />
            <Icon src="/images/css3.png" />
            <Icon src="/images/sass.png" />
            <Icon src="/images/javascript.png" />
            <Icon src="/images/typescript.png" />
            <Icon src="/images/react.png" />
            <Icon src="/images/node-js.png" />
            <Icon src="/images/python.png" />
            <Icon src="/images/mongodb.png" />
            <Icon src="/images/mysql.png" />
            <Icon src="/images/graphql.png" />
          </IconsContainer>
        </DescContainer>
        <SocialIconsContainer></SocialIconsContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
