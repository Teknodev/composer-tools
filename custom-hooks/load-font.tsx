var WebFont = require("webfontloader");
export function loadFont(font: string[]) {
  WebFont.load({
    google: {
      families: [...font],
    },
  });
}