/**
 * NavigateActionHandler
 *
 * Runtime handler for the "navigate" action type.
 * Navigates to a URL or page when an interaction trigger fires.
 */

import { NavigateActionConfig } from "../../types/interaction";

export class NavigateActionHandler {
  /**
   * Execute the navigate action.
   * Optionally delays before navigating to the specified URL.
   */
  static execute(config: NavigateActionConfig): void {
    if (!config.url) {
      console.warn("[NavigateActionHandler] No URL specified, skipping.");
      return;
    }

    const doNavigate = () => {
      const url = NavigateActionHandler.formatUrl(config.url);

      if (config.target === "_blank") {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        // For same-tab navigation
        if (url.startsWith("#")) {
          // Anchor navigation
          const el = document.querySelector(url);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.location.href = url;
        }
      }
    };

    if (config.delay > 0) {
      setTimeout(doNavigate, config.delay);
    } else {
      doNavigate();
    }
  }

  /**
   * Format the URL: prepend https:// if it doesn't have a protocol
   * and isn't an anchor or relative path.
   */
  private static formatUrl(url: string): string {
    const trimmed = url.trim();
    if (!trimmed) return trimmed;

    // Anchor links, relative paths, or protocol-relative URLs are fine as-is
    if (
      trimmed.startsWith("#") ||
      trimmed.startsWith("/") ||
      trimmed.startsWith("//") ||
      trimmed.startsWith("mailto:") ||
      trimmed.startsWith("tel:") ||
      /^https?:\/\//i.test(trimmed)
    ) {
      return trimmed;
    }

    // Prepend https:// for bare domains
    return `https://${trimmed}`;
  }
}
