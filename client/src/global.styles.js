import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Open Sans Condensed";
  padding: 50px 20px;

  @media screen and (max-width: 800px) {
      padding: 42px 5px;
  }
}
a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

`;
