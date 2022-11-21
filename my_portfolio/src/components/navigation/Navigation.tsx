import React from "react";
import {NavContainer, NavLogo, NavItemsContainer, NavItem} from "./navStyles";

function Navigation() {
  return (
    <>
      <NavContainer>
        <NavLogo>L.O</NavLogo>
        <NavItemsContainer>
          <NavItem>About</NavItem>
          <NavItem>Resume</NavItem>
          <NavItem>Portfolio</NavItem>
          <NavItem>Contact</NavItem>
        </NavItemsContainer>
      </NavContainer>
    </>
  );
}

export default Navigation;
