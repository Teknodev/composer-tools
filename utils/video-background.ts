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
  const targets = root.querySelectorAll<HTMLElement>("[data-video-bg]");

  if (targets.length === 0) {
    return;
  }

  logger.debug("Scanning for video backgrounds", { targetCount: targets.length });

  targets.forEach((el) => {
    const computed = getComputedStyle(el);
    const rawUrl = computed.getPropertyValue(VIDEO_BG_VARS.URL)?.trim() || "";
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
        logger.info("Video background removed (URL cleared)");
      }
      return;
    }

    if (existingVideo) {
      updateVideoElement(existingVideo, url, loop, muted, autoplay);
    } else {
      const video = createVideoElement(url, loop, muted, autoplay);
      el.insertBefore(video, el.firstChild);
      logger.info("Video background injected", { elementTag: el.tagName });
    }
  });
}
