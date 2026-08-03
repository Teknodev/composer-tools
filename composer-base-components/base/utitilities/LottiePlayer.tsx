import * as React from "react";

/**
 * Loads the `<lottie-player>` web component once, on demand.
 *
 * The custom element is not bundled — it is injected from a CDN the first time a
 * Lottie is rendered, mirroring how the app already loads other third-party
 * players/SDKs. Custom elements upgrade retroactively, so any `<lottie-player>`
 * already in the DOM starts animating as soon as the script defines the element.
 *
 * Pinned to a specific version so a CDN "latest" bump can't change behavior.
 */
const LOTTIE_PLAYER_SRC =
  "https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js";

let lottiePlayerPromise: Promise<void> | null = null;

export function ensureLottiePlayer(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  // Already defined (script loaded, or bundled elsewhere) — nothing to do.
  if (window.customElements?.get("lottie-player")) return Promise.resolve();

  if (lottiePlayerPromise) return lottiePlayerPromise;

  lottiePlayerPromise = new Promise<void>((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-lottie-player="true"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => resolve(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = LOTTIE_PLAYER_SRC;
    script.async = true;
    script.dataset.lottiePlayer = "true";
    // Resolve on error too: a failed load must not leave callers hanging. The
    // element simply stays un-upgraded (empty), the same graceful degradation as
    // an unsupported browser.
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => {
      lottiePlayerPromise = null; // allow a later retry
      resolve();
    }, { once: true });
    document.head.appendChild(script);
  });

  return lottiePlayerPromise;
}

export interface LottiePlayerProps {
  src?: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  style?: React.CSSProperties;
  /** Forwarded to the underlying element (e.g. data-* attributes). */
  [key: string]: any;
}

/**
 * Thin React wrapper around the `<lottie-player>` custom element that guarantees
 * the defining script is loaded. Use this instead of a raw `<lottie-player>` so
 * the element is never left un-upgraded.
 */
const LottiePlayer: React.FC<LottiePlayerProps> = ({
  src,
  className,
  loop,
  autoplay,
  speed = 1,
  style,
  ...rest
}) => {
  const [ready, setReady] = React.useState<boolean>(
    () => typeof window !== "undefined" && !!window.customElements?.get("lottie-player")
  );

  React.useEffect(() => {
    if (ready) return;
    let cancelled = false;
    ensureLottiePlayer().then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [ready]);

  if (!src) return null;

  // Re-key on src+settings so switching the source or toggling loop/autoplay
  // re-instantiates the player instead of reusing a stale animation.
  return React.createElement("lottie-player", {
    key: `${src}-${!!loop}-${!!autoplay}`,
    className,
    src,
    background: "transparent",
    speed: String(speed),
    loop: !!loop,
    autoplay: !!autoplay,
    style: { width: "100%", height: "100%", ...style },
    ...rest,
  });
};

export default LottiePlayer;
