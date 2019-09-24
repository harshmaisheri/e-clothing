import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: -40px;
  border-radius: 20px;
  background-color: #2f3031;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const TitleContainer = styled(Link)`
  color: #ccac00;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  font-size: 22px;
  width: 40vw;
  font-family: "Berkshire Swash", cursive;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: rgb(146, 141, 141);

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  color: rgb(146, 141, 141);
`;
