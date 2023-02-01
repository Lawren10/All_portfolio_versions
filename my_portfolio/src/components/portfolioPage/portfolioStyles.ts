import styled from "styled-components";

export const PortfolioItemContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  /* padding: 2rem 0; */
  margin: 1rem auto;
  gap: 1rem;
`;

export const PortfolioItem = styled.div`
  width: 30%;
  height: 24rem;
  position: relative;
  background-color: gray;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 1px 0 0 #000103;
  cursor: pointer;
`;
export const PortfolioItemImg = styled.img`
  width: 50%;
  height: 8rem;
  background-color: cyan;
`;
export const PortfolioItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  ${PortfolioItem}:hover & {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;

export const ViewBtn = styled.a`
  font-size: 1.2rem;
  color: white;
  margin-top: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.main};
    text-decoration: underline;
  }
`;
