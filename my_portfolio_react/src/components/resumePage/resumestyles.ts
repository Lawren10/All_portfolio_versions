import styled from "styled-components";

export const ResumeContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 4rem;
  gap: 3rem;
  margin-top: 2rem;
`;

export const ResumeContHeader = styled.h3`
  color: ${(props) => props.theme.colors.header};
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export const ResumeItemHeader = styled.h6`
  color: ${(props) => props.theme.colors.header};
  font-size: 1rem;
`;

export const ResumeEducationCont = styled.div`
  width: 50%;
`;

export const ResumeExperinceCont = styled.div`
  width: 50%;
`;

export const ResumeItem = styled.article`
  background-color: #010711;
  border-left: 3px solid ${(props) => props.theme.colors.main};
  padding: 1.5rem 2rem 1.5rem 3rem;
  position: relative;
  border-bottom: 1px solid #000103;
`;

export const ResumeItemDetails = styled.p`
  padding: 0.5rem 0;
  color: ${(props) => props.theme.colors.body};
`;

export const ResumeItemDescription = styled.p`
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.body};
  font-size: 0.8rem;
  letter-spacing: 0.06rem;
  line-height: 1.3rem;
`;

export const ResumeItemPointer = styled.span`
  left: 0;
  margin-top: 2px;
  position: absolute;
  &::before {
    content: "";
    height: 1rem;
    left: 0;
    width: 1rem;
    background-color: ${(props) => props.theme.colors.main};
    position: absolute;
  }
  &::after {
    content: "";
    border: 8px solid transparent;
    left: 1rem;
    border-left-color: ${(props) => props.theme.colors.main};
    position: absolute;
  }
`;

export const ResumeSkillCont = styled.section`
  padding: 6rem 1rem 1rem 4rem;
`;

export const SkillItemsCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const SkillItemCont = styled.div`
  text-align: center;
  padding: 1rem 2rem;
  background-color: #010711;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 0 0 #000103;
`;
export const SkillItemImage = styled.img`
  width: 4.5rem;
  margin-bottom: 1rem;
`;
export const SkillItemName = styled.h6`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.body};
`;
