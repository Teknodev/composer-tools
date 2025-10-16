export const loadFonts = (fonts: string[]) => {
  import("webfontloader").then((WebFont) => {
    WebFont.load({
      google: {
        families: fonts,
      },
    });
  });
};
