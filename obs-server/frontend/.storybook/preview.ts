import type { Preview } from "@storybook/react";
import '../src/style/index.scss'
import '../src/style/index.scss'
import '../src/style/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
