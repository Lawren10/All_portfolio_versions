import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
`;

export const NavLogo = styled.div`
  font-size: 3rem;
  font-weight: 800;
`;

export const NavItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style-type: none;
`;

export const NavItem = styled.li`
  font-weight: 300;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
