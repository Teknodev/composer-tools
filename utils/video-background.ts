import { Logger } from "classes/Logger";

const logger = new Logger("VideoBackground");

/**
 * CSS custom properties used to configure video backgrounds.
 * These are stored in the CSS class pipeline alongside standard CSS properties.
 */
export const VIDEO_BG_VARS = {
  URL: "--bg-video-url",
  LOOP: "--bg-video-loop",
  MUTED: "--bg-video-muted",
  AUTOPLAY: "--bg-video-autoplay",
} as const;

/**
 * Strips HTML tags from a value.
 * Safety net for cases where a rich-text editor was used to enter URLs.
 */
function sanitizeUrl(raw: string): string {
  // Remove HTML tags
  const stripped = raw.replace(/<[^>]*>/g, "").trim();
  // Basic URL validation
  if (!stripped || (!stripped.startsWith("http://") && !stripped.startsWith("https://"))) {
    return "";
  }
  return stripped;
}

/**
 * Inline styles applied to injected <video> elements.
 * Makes the video fill its parent container as a background layer.
 */
const VIDEO_STYLES: Partial<CSSStyleDeclaration> = {
  position: "absolute",
  inset: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: "0",
  pointerEvents: "none",
};

const videoBackgroundObservers = new WeakMap<Document | HTMLElement, MutationObserver>();

type VideoBackgroundTarget = {
  element: HTMLElement;
  hasOwnDeclaration: boolean;
};

function ensurePositioningContext(el: HTMLElement, computed: CSSStyleDeclaration): void {
  if (computed.position === "static") {
    el.style.position = "relative";
    el.dataset.videoBgPositioned = "true";
  }
}

function restorePositioningContext(el: HTMLElement): void {
  if (el.dataset.videoBgPositioned === "true") {
    el.style.removeProperty("position");
    delete el.dataset.videoBgPositioned;
  }
}

function addSelectorMatchesToSet(
  selectorText: string,
  root: HTMLElement | Document,
  targets: Set<HTMLElement>
): void {
  const scope = root instanceof Document ? root : root.ownerDocument;

  try {
    if (root instanceof HTMLElement && root.matches(selectorText) && root.matches("[data-video-bg]")) {
      targets.add(root);
    }

    const selectorTargets = root.querySelectorAll<HTMLElement>(selectorText);
    selectorTargets.forEach((el) => {
      if (el.matches("[data-video-bg]")) {
        targets.add(el);
      }
    });
  } catch {
    logger.debug("Skipped unsupported video background selector", { selectorText, href: scope.location?.href });
  }
}

function collectRuleTargets(rule: CSSRule, root: HTMLElement | Document, targets: Set<HTMLElement>): void {
  if (rule instanceof CSSStyleRule) {
    if (rule.style.getPropertyValue(VIDEO_BG_VARS.URL).trim()) {
      addSelectorMatchesToSet(rule.selectorText, root, targets);
    }

    return;
  }

  const nestedRules = (rule as CSSGroupingRule).cssRules;
  if (!nestedRules) return;

  Array.from(nestedRules).forEach((nestedRule) => collectRuleTargets(nestedRule, root, targets));
}

function collectVideoBackgroundTargets(root: HTMLElement | Document): VideoBackgroundTarget[] {
  const explicitTargets = new Set<HTMLElement>();
  const cleanupTargets = new Set<HTMLElement>();

  if (root instanceof HTMLElement && root.matches("[data-video-bg]") && root.style.getPropertyValue(VIDEO_BG_VARS.URL).trim()) {
    explicitTargets.add(root);
  }

  root.querySelectorAll<HTMLElement>("[data-video-bg]").forEach((el) => {
    if (el.style.getPropertyValue(VIDEO_BG_VARS.URL).trim()) {
      explicitTargets.add(el);
    }
  });

  Array.from(document.styleSheets).forEach((sheet) => {
    let rules: CSSRuleList;

    try {
      rules = sheet.cssRules;
    } catch {
      return;
    }

    Array.from(rules).forEach((rule) => collectRuleTargets(rule, root, explicitTargets));
  });

  root.querySelectorAll<HTMLElement>("[data-bg-video]").forEach((video) => {
    const parent = video.parentElement;
    if (parent?.matches("[data-video-bg]")) {
      cleanupTargets.add(parent);
    }
  });

  const allTargets = new Set(explicitTargets);
  cleanupTargets.forEach((el) => allTargets.add(el));

  return Array.from(allTargets).map((element) => ({
    element,
    hasOwnDeclaration: explicitTargets.has(element),
  }));
}

function hasVideoBackgroundTarget(node: Node): boolean {
  if (!(node instanceof Element)) return false;

  return node.matches("[data-video-bg]") || !!node.querySelector("[data-video-bg]");
}

function shouldRescanForMutation(mutation: MutationRecord): boolean {
  if (mutation.type === "attributes") {
    return mutation.target instanceof Element && mutation.target.matches("[data-video-bg]");
  }

  return Array.from(mutation.addedNodes).some(hasVideoBackgroundTarget);
}

export function observeVideoBackgrounds(root: HTMLElement | Document = document): () => void {
  const target = root instanceof Document ? root.documentElement : root;

  if (!target || typeof MutationObserver === "undefined") {
    return () => undefined;
  }

  videoBackgroundObservers.get(root)?.disconnect();

  let frameId: number | null = null;
  const scheduleScan = () => {
    if (frameId !== null) return;

    frameId = requestAnimationFrame(() => {
      frameId = null;
      applyVideoBackgrounds(root);
    });
  };

  const observer = new MutationObserver((mutations) => {
    if (mutations.some(shouldRescanForMutation)) {
      scheduleScan();
    }
  });

  observer.observe(target, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["data-video-bg"],
  });

  videoBackgroundObservers.set(root, observer);

  return () => {
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
    }

    observer.disconnect();
    videoBackgroundObservers.delete(root);
  };
}

/**
 * Creates a new <video> element configured as a background layer.
 */
function createVideoElement(
  url: string,
  loop: string | null,
  muted: string | null,
  autoplay: string | null
): HTMLVideoElement {
  const video = document.createElement("video");
  video.setAttribute("data-bg-video", "");
  Object.assign(video.style, VIDEO_STYLES);

  updateVideoElement(video, url, loop, muted, autoplay);

  logger.info("Video background element created", { url });
  return video;
}

/**
 * Updates an existing <video> element with new configuration.
 * Only modifies `src` if the URL has actually changed to avoid reloading.
 */
function updateVideoElement(
  video: HTMLVideoElement,
  url: string,
  loop: string | null,
  muted: string | null,
  autoplay: string | null
): void {
  const srcChanged = video.src !== url && video.getAttribute("src") !== url;
  if (srcChanged) {
    video.src = url;
    logger.debug("Video src updated", { url });
  }

  video.loop = loop === "1";
  video.muted = muted !== "0"; // default to muted
  video.playsInline = true;
  video.preload = "auto";

  if (autoplay !== "0") {
    video.autoplay = true;
    video.play().catch((err) => {
      logger.debug("Autoplay blocked by browser policy", { error: err.message });
    });
  } else {
    video.autoplay = false;
    video.pause();
  }
}

/**
 * Scans all elements with [data-video-bg] attribute within the given root.
 * Reads CSS custom properties from computed styles and injects/updates/removes
 * <video> elements as background layers.
 *
 * Called after applyStyleCSS() in the editor, and on DOMContentLoaded in the client.
 */
export function applyVideoBackgrounds(
  root: HTMLElement | Document = document
): void {
  const targets = collectVideoBackgroundTargets(root);

  if (targets.length === 0) {
    return;
  }

  logger.debug("Scanning for video backgrounds", { targetCount: targets.length });

  targets.forEach(({ element: el, hasOwnDeclaration }) => {
    const computed = getComputedStyle(el);
    const rawUrl = hasOwnDeclaration ? computed.getPropertyValue(VIDEO_BG_VARS.URL)?.trim() || "" : "";
    const url = sanitizeUrl(rawUrl);
    const loop = computed.getPropertyValue(VIDEO_BG_VARS.LOOP)?.trim() || "";
    const muted = computed.getPropertyValue(VIDEO_BG_VARS.MUTED)?.trim() || "";
    const autoplay = computed.getPropertyValue(VIDEO_BG_VARS.AUTOPLAY)?.trim() || "";

    const existingVideo = el.querySelector<HTMLVideoElement>(
      ":scope > video[data-bg-video]"
    );

    // No URL → clean up any existing video
    if (!url) {
      if (existingVideo) {
        existingVideo.pause();
        existingVideo.removeAttribute("src");
        existingVideo.remove();
        restorePositioningContext(el);
        logger.info("Video background removed (URL cleared)");
      }
      return;
    }

    ensurePositioningContext(el, computed);

    if (existingVideo) {
      updateVideoElement(existingVideo, url, loop, muted, autoplay);
    } else {
      const video = createVideoElement(url, loop, muted, autoplay);
      el.insertBefore(video, el.firstChild);
      logger.info("Video background injected", { elementTag: el.tagName });
    }
  });
}
