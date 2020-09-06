import React from "react";
import styled from "styled-components";
import { space, layout } from "styled-system";

import GlobalFonts from "../fonts";
import GlobalStyles from "../utils/GlobalStyles";

const Wrapper = styled.div`
  ${space};
  ${layout};
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  return (
    <Wrapper
      width={[
        1, // 100% below the smallest breakpoint (all viewports)
        1 / 2, // 50% from the next breakpoint and up
      ]}
      padding={{ default: 3, sm: 2, lg: 1 }}
    >
      <GlobalStyles />
      <GlobalFonts />
      <main>{children}</main>
    </Wrapper>
  );
};
