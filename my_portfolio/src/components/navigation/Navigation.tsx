import React from "react";
import {NavContainer, NavLogo, NavItemsContainer, NavItem} from "./navStyles";

import {usePortfolioGlobalContext} from "../../context/PortfolioContext";

function Navigation() {
  let {dispatch} = usePortfolioGlobalContext();
  return (
    <>
      {/* {console.log(dispatch)} */}
      <NavContainer>
        <NavLogo>L.O</NavLogo>
        <NavItemsContainer>
          <NavItem
            to="/About"
            onClick={() => {
              dispatch({type: "SET_TRANSITION_UP"});
            }}
          >
            About
          </NavItem>
          <NavItem to="/Resume">Resume</NavItem>
          <NavItem to="Portfolio">Portfolio</NavItem>
          <NavItem to="/Contact">Contact</NavItem>
        </NavItemsContainer>
      </NavContainer>
    </>
  );
}

export default Navigation;
