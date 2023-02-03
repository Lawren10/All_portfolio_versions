import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TransitionUp = keyframes`
from{
  transform: translateY(100%);
}
to{
  transform: translateY(-100%);
}
`;

const TransitionDown = keyframes`
from{
  transform: translateY(-100%);
}
to{
  transform: translateY(100%);
}
`;

export const PageTransition = styled.section<{ transition: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 100;
  bottom: 100%;
  animation: ${({ transition }) =>
    transition
      ? css``
      : css`
          ${TransitionUp} 1.5s ease-in-out forwards
        `};
`;

export const PageTransitionDown = styled.section<{ transition: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 100;
  top: 100%;
  animation: ${({ transition }) =>
    transition
      ? css`
          ${TransitionDown} 1.5s ease-in-out forwards
        `
      : css``};
`;

export const ReturnBtn = styled(Link)`
  position: absolute;
  top: 2rem;
  right: 3rem;
  color: white;
  text-decoration: none;
  z-index: 5;
  /* font-size: 2.5rem; */
  /* font-weight: 200; */
`;

export const ReturnBtnCont = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0.5rem 3rem;
`;

export const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 2rem;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #010711;
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.main};
    border-radius: 0.5rem;
  }
`;

export const HeaderContainer = styled.header`
  margin-top: 2rem;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HeaderTopTitle = styled.p`
  font-size: 1rem;
`;
export const HeaderLargeTitle = styled.h4`
  font-size: 2rem;
  margin: 0.8rem 0 0.6rem 0;
`;

export const HeaderTitleUnderline = styled.div`
  width: 4rem;
  height: 0.2rem;
  background-color: ${(props) => props.theme.colors.main};
`;
