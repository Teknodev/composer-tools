export type GuiQueries = {
  // TODO: Remove 'all' in future updates
  all: null;
  desktop: string;
  tablet: string;
  mobile: string;
};

export const GUI_QUERIES: GuiQueries = {
  // TODO: Remove 'all' in future updates
  all: null,
  desktop: "@container (min-width: 1280px)",
  tablet: "@container (min-width: 641px) and (max-width: 1279px)",
  mobile: "@container (max-width: 640px)"
};

export const TABS = ['desktop', 'tablet', 'mobile'] as const;

export function formatStyles(styles: Record<string, any>, important = true): string {
  const formattedStyles = Object.entries(styles)
    .map(([key, value]) => {
      const formattedKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${formattedKey}: ${value}${important ? " !important" : ""};`;
    })
    .join(" ");

  return `{ ${formattedStyles} }`;
}

export function processStyles(
  selector: string, 
  mediaQuery: string | null, 
  styles: any, 
  textRef: { current: string }
): void {
  if (!styles) return;

  const formattedStyles = formatStyles(styles);
  const fullSelector = mediaQuery
    ? `${mediaQuery} { ${selector}${formattedStyles} }`
    : `${selector}${formattedStyles}`;

  textRef.current += fullSelector;
}

export function processPseudoStyles(
  selector: string, 
  mediaQuery: string | null, 
  pseudos: any, 
  textRef: { current: string }
): void {
  if (!pseudos) return;

  Object.keys(pseudos).forEach((pseudoKey) => {
    const formattedPseudoStyles = formatStyles(pseudos[pseudoKey]);
    const fullSelector = mediaQuery
      ? `${mediaQuery} { ${selector + pseudoKey}${formattedPseudoStyles} }`
      : `${selector + pseudoKey}${formattedPseudoStyles}`;

    textRef.current += fullSelector;
  });
}

export function processBasePreferences(
  basePreferences: string, 
  textRef: { current: string },
  playgroundSelector: string = ""
): void {
  if (!basePreferences) return;

  try {
    const parsedPreferences = typeof basePreferences === 'string' 
      ? JSON.parse(basePreferences) 
      : basePreferences;

    const baseElementSelectors = {
      'h1': '[class*="h1"]',
      'h2': '[class*="h2"]', 
      'h3': '[class*="h3"]',
      'h4': '[class*="h4"]',
      'h5': '[class*="h5"]',
      'h6': '[class*="h6"]',
      'p': '[class*="p"]',
      'sectionTitle': '[class*="sectionTitle"]',
      'sectionSubtitle': '[class*="sectionSubTitle"]',
      'sectionDescription': '[class*="sectionDescription"]',
      'card': '[class*="baseCard"]',
      'buttonPrimary': '[class*="baseButton"][class*="primary"]',
      'buttonSecondary': '[class*="baseButton"][class*="secondary"]',
      'buttonTertiary': '[class*="baseButton"][class*="tertiary"]',
      'buttonLink': '[class*="baseButton"][class*="link"]',
      'buttonWhite': '[class*="baseButton"][class*="white"]',
      'buttonBlack': '[class*="baseButton"][class*="black"]',
      'baseButton': '[class*="baseButton"]',
      'baseButtonPrimary': '[class*="baseButton"][class*="primary"]',
      'baseButtonSecondary': '[class*="baseButton"][class*="secondary"]',
      'baseButtonTertiary': '[class*="baseButton"][class*="tertiary"]',
      'baseButtonLink': '[class*="baseButton"][class*="link"]',
      'baseButtonWhite': '[class*="baseButton"][class*="white"]',
      'baseButtonBlack': '[class*="baseButton"][class*="black"]'
    };

    Object.entries(parsedPreferences).forEach(([elementType, styles]) => {
      const selector = baseElementSelectors[elementType as keyof typeof baseElementSelectors];
      if (selector && styles) {
        const fullSelector = playgroundSelector ? `${playgroundSelector} ${selector}` : selector;
        processStyles(fullSelector, GUI_QUERIES.desktop, styles, textRef);
        processStyles(fullSelector, GUI_QUERIES.tablet, styles, textRef);
        processStyles(fullSelector, GUI_QUERIES.mobile, styles, textRef);
      }
    });
  } catch (error) {
    console.error('Error parsing base preferences:', error);
  }
}
