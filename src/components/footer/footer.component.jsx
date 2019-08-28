import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <Logo />
        <span className="title">Crown Clothing Ltd.</span>
      </div>
      <div className="text">
        © 1996-2019, crown-clothing.com, Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
