import '../src/style/global.scss';

export const parameters = {
  actions: { argTypesRegex: "^[oO]n.*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}