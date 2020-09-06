import styled from "styled-components";
import { variant, space, layout } from "styled-system";

import { ButtonText } from "./typography";
import fonts from "../utils/fonts";

export const Button = styled.button`
  padding: ${(props) =>
    `${props.theme.spaces.small} ${props.theme.spaces.medium}`};
  border-radius: 8px;
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0.03em;
  display: inline-block;
  ${variant({
    variants: {
      primary: {
        color: "white",
        bg: "secondary",
        border: "none",
        boxShadow:
          "0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
      },
      secondary: {
        color: "secondary",
        bg: "accent",
        border: "none",
        boxShadow: "inset 0px -1px 0.5px rgba(14, 14, 44, 0.4)",
      },
      tertiary: {
        color: "secondary",
        bg: "white",
        border: `1px solid #ECF1F4`,
      },
    },
  })};
  ${layout};
  ${space};
  ${ButtonText};
`;
