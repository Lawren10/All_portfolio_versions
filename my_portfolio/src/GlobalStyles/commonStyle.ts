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
  transform: translateY(0%);
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
          ${TransitionUp} 1s linear forwards
        `};
`;

export const ReturnBtn = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 200;
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
`;

export const HeaderContainer = styled.header`
  padding: 1.5rem;
  text-align: center;
`;
export const HeaderTopTitle = styled.p`
  font-size: 1rem;
`;
export const HeaderLargeTitle = styled.h4`
  font-size: 2rem;
  margin: 0.8rem 0 1.5rem 0;
`;

export const HeaderTitleUnderline = styled.div`
  width: 4rem;
  height: 0.8rem;
  background-color: ;
`;
