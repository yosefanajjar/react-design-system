import styled from "styled-components";
import { color, typography, space } from "styled-system";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.larger};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const Subtitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 500;
  ${color};
  ${space};
`;

export const Text = styled.p`
  ${typography};
  ${color};
  ${space};
`;

export const PreTitle = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  letter-spacing: 0.03em;
  display: inline-block;
  ${space};
`;

export const ButtonText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0.03em;
  display: inline-block;
`;

export const LinkText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-decoration: underline;
  color: ${(props) => props.theme.colors.secondary};
  letter-spacing: 0.03em;
  display: inline-block;
  ${space};
`;
