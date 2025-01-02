import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { background } from "storybook/internal/theming";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Gray",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
