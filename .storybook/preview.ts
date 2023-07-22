// .storybook/preview.js
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
   withThemeFromJSXProvider({
      GlobalStyles, // Adds your GlobalStyle component to all stories
   }),
];

export default decorators;
