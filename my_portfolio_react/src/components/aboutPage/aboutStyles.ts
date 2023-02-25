import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 4rem;
  gap: 3rem;
`;

export const AboutVisualContainer = styled.div`
  width: 35%;
  padding: 1rem;
  height: 70vh;
`;

export const AboutImage = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 0.25rem;
  height: 100%;
  max-width: 100%;
  padding: 0.25rem;
  background-color: grey;
`;

export const AboutDetailContainer = styled.article`
  width: 65%;
  padding: 1rem 4rem 0 1rem;
`;

export const AboutAsk = styled.h6`
  color: ${(props) => props.theme.colors.main};
  font-weight: 400;
  font-size: 1.2rem;
`;

export const AboutResponse = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 1.5rem 0;
`;

export const AboutParagraph = styled.p`
  color: ${(props) => props.theme.colors.body};
  font-size: 1rem;
  font-weight: 400;
  border-bottom: 2px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 0;
  line-height: 2rem;
  padding-bottom: 1.5rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem 1rem 0;
  width: 100%;
`;

export const AddressItemCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 50%;
`;
export const AddressItemTittle = styled.h6`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
`;
export const AddressItemText = styled.p`
  color: ${(props) => props.theme.colors.body};
  font-weight: 400;
  font-size: 1rem;
`;

export const AddressSocialItemCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const DownloadCvBtn = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 2rem;
  color: #fff;
  font-size: 1rem;
  padding: 0.8rem 3rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;
