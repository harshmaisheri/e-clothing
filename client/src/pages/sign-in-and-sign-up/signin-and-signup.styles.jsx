import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    &:first-child {
      margin-bottom: 50px;
    }
  }
`;
