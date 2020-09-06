import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";

export default createGlobalStyle`
 *, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.text};
    font-family: ${fonts.primary};
    max-width: 100%;
  }
`;
