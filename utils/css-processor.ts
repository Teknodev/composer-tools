import baseStyles from '../composer-base-components/base/base.module.scss';

export type GuiQueries = {
  // TODO: Remove 'all' in future updates
  all: null;
  desktop: string | null;
  tablet: string;
  mobile: string;
};
// NOTE: "desktop" currently behaves as "all" (no container query).
// This may revert to the original @container playground(min-width: 1280px) behavior in the future.
export const GUI_QUERIES: GuiQueries = {
  // TODO: Remove 'all' in future updates
  all: null,
  desktop: null,
   // desktop: "@container playground (min-width: 1280px)",
  tablet: "@container playground (min-width: 641px) and (max-width: 1279px)",
  mobile: "@container playground (max-width: 640px)"
};

export const TABS = ['desktop', 'tablet', 'mobile'] as const;

export const baseElementSelectors: Record<string, string> = {
  'h1': `.${baseStyles.h1}`,
  'h2': `.${baseStyles.h2}`,
  'h3': `.${baseStyles.h3}`,
  'h4': `.${baseStyles.h4}`,
  'h5': `.${baseStyles.h5}`,
  'h6': `.${baseStyles.h6}`,
  'p': `.${baseStyles.p}`,
  'sectionTitle': `.${baseStyles.sectionTitle}`,
  'sectionSubtitle': `.${baseStyles.sectionSubTitle}`,
  'sectionDescription': `.${baseStyles.sectionDescription}`,
  'baseCard': `.${baseStyles.baseCard}`,
  'baseButton': `.${baseStyles.baseButton}`,
  'baseButtonPrimary': `.${baseStyles.baseButton}.${baseStyles.primary}`,
  'baseButtonSecondary': `.${baseStyles.baseButton}.${baseStyles.secondary}`,
  'baseButtonTertiary': `.${baseStyles.baseButton}.${baseStyles.tertiary}`,
  'baseButtonLink': `.${baseStyles.baseButton}.${baseStyles.link}`,
  'baseButtonWhite': `.${baseStyles.baseButton}.${baseStyles.white}`,
  'baseButtonBlack': `.${baseStyles.baseButton}.${baseStyles.black}`
};

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

    Object.entries(parsedPreferences).forEach(([elementType, styles]) => {
      const selector = baseElementSelectors[elementType as keyof typeof baseElementSelectors];
      if (!selector || !styles) return;

      const fullSelector = playgroundSelector ? `${playgroundSelector} ${selector}` : selector;
      const stylesObj = styles as Record<string, any>;
      
      const desktopStyles = stylesObj.desktop || {};
      const tabletStyles = stylesObj.tablet || {};
      const mobileStyles = stylesObj.mobile || {};
      
      const hasStyles = (styleObj: Record<string, any>) => Object.keys(styleObj).length > 0;
      
      if (hasStyles(desktopStyles)) {
        processStyles(fullSelector, GUI_QUERIES.desktop, desktopStyles, textRef);
      }
      if (hasStyles(tabletStyles)) {
          processStyles(fullSelector, GUI_QUERIES.tablet, tabletStyles, textRef);
      }
      if (hasStyles(mobileStyles)) {
          processStyles(fullSelector, GUI_QUERIES.mobile, mobileStyles, textRef);
      }
    });
  } catch (error) {
    console.error('Error parsing base preferences:', error);
  }
}
