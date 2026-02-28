// src/composer-tools/interaction-engine/commands/animate/AnimationObserverManager.ts

/**
 * Shared IntersectionObserver setup for animation pause/play on visibility changes.
 * Used by both AnimateCommand and LoopEffectCommand.
 */
export class AnimationObserverManager {
  private observer?: IntersectionObserver;

  /**
   * Setup IntersectionObserver to pause/play an animation when its element
   * enters/leaves the viewport.
   */
  setup(element: HTMLElement, animation: Animation): void {
    this.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation.play();
          } else {
            animation.pause();
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
