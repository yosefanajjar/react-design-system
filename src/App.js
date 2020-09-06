import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";

import { Layout } from "./components/Layout";
import { Button } from "./components/Button";
import {
  H1,
  H2,
  H3,
  Subtitle,
  Text,
  PreTitle,
  ButtonText,
  LinkText,
} from "./components/typography";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <H1 mb={2} color="dark">
          Hello World
        </H1>
        <H2 mb={2} color="dark">
          Hello World
        </H2>
        <H3 mb={2} color="dark">
          Hello World
        </H3>
        <Subtitle mb={2} color="dark">
          Hello World
        </Subtitle>
        <Text mb={2} fontSize="medium" fontWeight={500} lineHeight="140%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </Text>
        <Text mb={2} fontSize="medium" fontWeight={700} lineHeight="140%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </Text>
        <Text mb={2} fontSize="small" fontWeight={500} lineHeight="140%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </Text>
        <PreTitle mr={2}>Pre Title</PreTitle>
        <ButtonText>Button Text</ButtonText>
        <LinkText ml={2}>Link Text</LinkText>

        <div>
          <Button variant="primary" onClick={() => console.log("clicked!😀")}>
            Button
          </Button>
          <Button variant="secondary" onClick={() => console.log("clicked!😀")}>
            Button
          </Button>
          <Button variant="tertiary" onClick={() => console.log("clicked!😀")}>
            Button
          </Button>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
