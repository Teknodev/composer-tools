export const loadFont = (fonts: string[]) => (async () => {
  const WebFont = await require("webfontloader");
  WebFont.load({
    google: {
      families: fonts,
    },
  });
});
