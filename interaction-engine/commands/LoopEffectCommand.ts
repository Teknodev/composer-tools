// src/composer-tools/interaction-engine/commands/LoopEffectCommand.ts

import { BaseAnimationCommand } from '../core/types';
import { InteractionContext } from '../core/types';

export interface LoopEffectConfig {
  type: 'loop' | 'mirror';
  delay?: number;
  opacity?: number;
  scale?: number;
  rotate?: {
    mode: '2D' | '3D';
    x?: number;
    y?: number;
    z?: number;
  };
  skew?: {
    x?: number;
    y?: number;
  };
  offset?: {
    x?: number;
    y?: number;
  };
  offScreen?: 'play' | 'pause';
  transition?: {
    easing: string;
    duration: number;
  };
}

export class LoopEffectCommand extends BaseAnimationCommand {
  private animation?: Animation;
  private observer?: IntersectionObserver;

  async execute(context: InteractionContext): Promise<void> {
    // Cancel any existing animations
    this.cancelAllAnimations();

    const config = context.config as LoopEffectConfig;
    const element = context.target;

    // Store original styles
    this.storeOriginalStyles(element, ['opacity', 'transform']);

    // Create keyframes based on loop type
    const keyframes = this.createLoopKeyframes(config);

    // Configure animation options
    const animationOptions: KeyframeAnimationOptions = {
      duration: config.transition?.duration || 2000,
      easing: this.mapEasing(config.transition?.easing || 'ease'),
      iterations: Infinity,
      direction: config.type === 'mirror' ? 'alternate' : 'normal',
      delay: config.delay || 0,
      fill: 'both',
    };

    // Create and start the animation
    this.animation = element.animate(keyframes, animationOptions);
    this.activeAnimations.set('loop-effect', this.animation);

    // Setup intersection observer for offScreen behavior
    if (config.offScreen === 'pause') {
      this.setupIntersectionObserver(element);
    }
  }

  private createLoopKeyframes(config: LoopEffectConfig): Keyframe[] {
    const initialState: Keyframe = {
      opacity: 1,
      transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
    };

    const animatedState: Keyframe = {};

    // Apply opacity
    if (config.opacity !== undefined) {
      animatedState.opacity = config.opacity;
    }

    // Build transform string
    const transforms: string[] = [];

    // Apply offset (translate)
    if (config.offset) {
      const x = config.offset.x || 0;
      const y = config.offset.y || 0;
      transforms.push(`translate(${x}px, ${y}px)`);
    }

    // Apply scale
    if (config.scale !== undefined) {
      transforms.push(`scale(${config.scale})`);
    }

    // Apply rotation
    if (config.rotate) {
      if (config.rotate.mode === '3D') {
        const x = config.rotate.x || 0;
        const y = config.rotate.y || 0;
        const z = config.rotate.z || 0;
        transforms.push(`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`);
      } else {
        const z = config.rotate.z || 0;
        transforms.push(`rotate(${z}deg)`);
      }
    }

    // Apply skew
    if (config.skew) {
      const x = config.skew.x || 0;
      const y = config.skew.y || 0;
      transforms.push(`skew(${x}deg, ${y}deg)`);
    }

    if (transforms.length > 0) {
      animatedState.transform = transforms.join(' ');
    }

    // Return keyframes based on loop type
    if (config.type === 'mirror') {
      // Mirror mode: animate from initial to animated state (alternate direction will handle the return)
      return [initialState, animatedState];
    } else {
      // Loop mode: animate from initial to animated and back to initial
      return [initialState, animatedState, initialState];
    }
  }

  private mapEasing(easing: string): string {
    const easingMap: Record<string, string> = {
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
      'cubic-bezier': 'cubic-bezier(0.4, 0, 0.2, 1)',
    };
    return easingMap[easing.toLowerCase()] || easing;
  }

  private setupIntersectionObserver(element: HTMLElement): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (this.animation) {
            if (entry.isIntersecting) {
              // Element is visible, play animation
              this.animation.play();
            } else {
              // Element is off-screen, pause animation
              this.animation.pause();
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

  cleanup(context: InteractionContext): void {
    // Disconnect observer
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    // Cancel all animations
    this.cancelAllAnimations();

    // Restore original styles
    this.restoreOriginalStyles(context.target);
  }

  undo(context: InteractionContext): void {
    this.cleanup(context);
  }
}
