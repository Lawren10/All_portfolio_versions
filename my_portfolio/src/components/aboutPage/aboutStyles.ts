import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
  gap: 3rem;
`;

export const AboutVisualContainer = styled.div`
  width: 35%;
`;
export const AboutDetailContainer = styled.article`
  width: 65%;
  padding: 1rem 4rem 0 1rem;
`;

export const AboutAsk = styled.h6`
  color: #03132c;
  font-weight: 400;
  font-size: 1.2rem;
`;

export const AboutResponse = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 1.5rem 0;
`;

export const AboutParagraph = styled.p`
  color: #9f9f9f;
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
`;

export const AddressItemCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const AddressItemTittle = styled.h6`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
`;
export const AddressItemText = styled.p`
  color: #9f9f9f;
  font-weight: 400;
  font-size: 1rem;
`;

export const DownloadCvBtn = styled.button`
  background-color: #03132c;
  border: 1px solid #03132c;
  border-radius: 2rem;
  color: #fff;
  font-size: 1rem;
  padding: 0.8rem 3rem;
  cursor: pointer;
`;
