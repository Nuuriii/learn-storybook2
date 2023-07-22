import type { Preview } from "@storybook/react";

// .storybook/preview.js
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const preview: Preview = {
   parameters: {
      actions: { argTypesRegex: "^on[A-Z].*" },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
         },
      },
   },
};

export default preview;
