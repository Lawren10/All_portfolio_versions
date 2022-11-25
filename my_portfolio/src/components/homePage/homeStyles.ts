import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Avatar = styled.img`
  width: 45%;
  background-color: #03132c;
  border-radius: 50%;
  position: absolute;
  top: 3rem;
  left: 6rem;
  opacity: 0.7;
  background-blend-mode: multiply;
`;

export const DescContainer = styled.aside`
  position: absolute;
  top: 40%;
  right: 5rem;
  transform: translateY(-40%);
  /* border: 1px solid red; */
`;
export const Name = styled.h1`
  font-weight: 800;
  font-size: 3rem;
`;

export const JobTitle = styled.h3`
  font-weight: 200;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
  letter-spacing: 0.2rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Icon = styled.img`
  width: 1.5rem;
  cursor: pointer;
  &:hover {
    transform: translateY(0.5rem);
    transition: transform 0.2s ease-in-out;
  }
`;
export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  color: white;
`;
