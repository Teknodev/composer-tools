export const loadFonts = (
  fonts: string[],
  customFontFamilies: Array<{
    source?: string;
    name?: string;
  }> = []
) => {
  
  import("webfontloader").then((WebFont) => {
    WebFont.load({
      google: {
        families: fonts,
      },
      custom: {
        families: customFontFamilies.map((font) => font.name || ""),
      },
    });
  });
};
