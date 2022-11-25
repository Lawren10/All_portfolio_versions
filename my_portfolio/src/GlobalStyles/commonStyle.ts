import styled, {keyframes, css} from "styled-components";

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

export const PageTransition = styled.section<{transition: boolean}>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.bgColor};
  z-index: 100;
  bottom: 100%;
  animation: ${({transition}) =>
    transition
      ? css`
          ${TransitionDown} 1s linear forwards
        `
      : css`
          ${TransitionUp} 1s linear forwards
        `};
`;
