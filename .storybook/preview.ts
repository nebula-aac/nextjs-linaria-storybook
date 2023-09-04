import type { Preview } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon"
import { lightTheme } from "../src/theme"
import { providerFn } from "./providerFn";

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

const themingDecorator = withThemes(null, [lightTheme], { providerFn })

export const decorators = [themingDecorator]
