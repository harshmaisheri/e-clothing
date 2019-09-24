import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const SignInSubtle = styled.span`
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
