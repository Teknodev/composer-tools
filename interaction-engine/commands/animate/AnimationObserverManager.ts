// src/composer-tools/interaction-engine/commands/animate/AnimationObserverManager.ts

/**
 * Shared IntersectionObserver setup for animation pause/play on visibility changes.
 * Used by both AnimateCommand and LoopEffectCommand.
 */
export class AnimationObserverManager {
  private observer?: IntersectionObserver;

  /**
   * Setup IntersectionObserver to pause/play one or more animations when their element
   * enters/leaves the viewport. Supports a single Animation or an array for
   * composite animations (e.g. separate transform + opacity tracks).
   */
  setup(element: HTMLElement, animations: Animation | Animation[]): void {
    this.disconnect();

    const targets = Array.isArray(animations) ? animations : [animations];

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          for (const anim of targets) {
            try {
              if (entry.isIntersecting) {
                anim.play();
              } else {
                anim.pause();
              }
            } catch {
              // Animation may have been cancelled between observer ticks; ignore.
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    this.observer.observe(element);
  }

  /**
   * Disconnect and clean up the observer.
   */
  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
}
