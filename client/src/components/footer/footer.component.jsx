import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import {
  FooterContainer,
  FooterLogoContainer,
  FooterTextContainer,
  FooterTitleContainer
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoContainer to="/">
        <Logo />
        <FooterTitleContainer>Crown Clothing Ltd.</FooterTitleContainer>
      </FooterLogoContainer>
      <FooterTextContainer>
        © 1996-2019, crown-clothing.com, Inc. or its affiliates
      </FooterTextContainer>
    </FooterContainer>
  );
};

export default Footer;
