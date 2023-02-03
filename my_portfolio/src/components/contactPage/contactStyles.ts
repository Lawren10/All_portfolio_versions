import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 4rem 0rem 6rem;
  gap: 3rem;
  margin-top: 2rem;
`;

export const ContactHeader = styled.h3<{ align: string }>`
  color: ${(props) => props.theme.colors.header};
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: ${({ align }) => (align === "true" ? "center" : "")};
`;

// export const ResumeItemHeader = styled.h6`
//   color: ${(props) => props.theme.colors.header};
//   font-size: 1rem;
// `;

export const ContactFormCont = styled.div`
  width: 70%;
`;

export const ContactAddressCont = styled.div`
  width: 30%;
`;
