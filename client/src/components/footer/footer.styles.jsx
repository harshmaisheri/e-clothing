import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: rgb(32, 32, 32);
  border-radius: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: -40px;
`;

export const FooterLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
`;

export const FooterTitleContainer = styled.span`
  color: #ccac00;
  font-size: 24px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  font-family: "Berkshire Swash", cursive;
`;

export const FooterTextContainer = styled.span`
  color: rgb(97, 95, 95);
  font-size: 14px;
  text-align: center;
  margin: 20px;
`;
