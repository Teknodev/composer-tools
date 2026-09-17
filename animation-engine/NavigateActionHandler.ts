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
        NavigateActionHandler.openInNewTab(url);
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
   * Open the URL in a new tab, leaving the current one where it is.
   *
   * `window.open(url, "_blank", "noopener,noreferrer")` passes a features
   * string, and a non-empty features string makes some browsers (Safari,
   * older Firefox) treat the call as a popup window — which their blockers
   * refuse, so nothing opened. Following a real `target="_blank"` link is a
   * plain new-tab navigation everywhere and keeps the same noopener /
   * noreferrer protection. window.open is only the fallback.
   */
  private static openInNewTab(url: string): void {
    try {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      window.open(url, "_blank", "noopener,noreferrer");
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
