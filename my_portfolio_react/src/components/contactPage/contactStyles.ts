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
  margin-bottom: 0.5rem;
  text-align: ${({ align }) => (align === "true" ? "center" : "")};
`;

export const ContactTextDesc = styled.p`
  color: ${(props) => props.theme.colors.body};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 2rem;
`;

// export const ResumeItemHeader = styled.h6`
//   color: ${(props) => props.theme.colors.header};
//   font-size: 1rem;
// `;

export const ContactFormCont = styled.div`
  width: 50%;
`;

export const ContactAddressCont = styled.div`
  width: 50%;
`;

export const ContactItemCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const ContactDescCont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  gap: 0.3rem;
`;

export const ContactItemTittle = styled.h6`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
`;
export const ContactItemText = styled.p`
  color: ${(props) => props.theme.colors.body};
  font-weight: 400;
  font-size: 1rem;
`;
