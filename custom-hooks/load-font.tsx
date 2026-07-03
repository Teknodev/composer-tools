/**
 * Loads the given Google font families. Returns a promise that resolves once the
 * load has settled (all requested families either rendered or failed/timed out),
 * so callers can wait for a font to be ready before switching the UI to it —
 * avoiding a flash of the old/fallback font while the file downloads.
 */
export const loadFonts = (fonts: string[]): Promise<void> => {
  if (!fonts.length) return Promise.resolve();

  return import("webfontloader").then(
    (WebFont) =>
      new Promise<void>((resolve) => {
        let settled = false;
        const done = () => {
          if (settled) return;
          settled = true;
          resolve();
        };

        WebFont.load({
          google: {
            families: fonts,
          },
          // Resolve on either outcome so a slow/unavailable font never leaves the
          // caller hanging. `timeout` caps the wait for the slowest font.
          active: done,
          inactive: done,
          timeout: 5000,
        });
      })
  );
};
