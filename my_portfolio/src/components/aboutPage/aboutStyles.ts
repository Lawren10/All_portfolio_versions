import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
  gap: 3rem;
`;

export const AboutVisualContainer = styled.div`
  width: 40%;
`;
export const AboutDetailContainer = styled.article`
  width: 60%;
  padding: 1rem 5rem;
`;

export const AboutAsk = styled.h6`
  color: #03132c;
  font-weight: 400;
  font-size: 1rem;
`;

export const AboutResponse = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const AboutParagraph = styled.p`
  color: #9f9f9f;
  /* font-family: Poppins, sans-serif; */
  font-size: 0.8rem;
  font-weight: 400;
  border-bottom: 2px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 0;
  line-height: 1.3rem;
  padding-bottom: 1.5rem;
`;
