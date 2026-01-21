// src/composer-tools/interaction-engine/animation/AnimationConfigBuilder.ts

export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  repeat?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
}

export class AnimationConfigBuilder {
  private config: Partial<AnimationConfig> = {};

  duration(value: number): AnimationConfigBuilder {
    this.config.duration = value;
    return this;
  }

  delay(value: number): AnimationConfigBuilder {
    this.config.delay = value;
    return this;
  }

  easing(value: string): AnimationConfigBuilder {
    this.config.easing = value;
    return this;
  }

  repeat(value: number): AnimationConfigBuilder {
    this.config.repeat = value;
    return this;
  }

  direction(value: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'): AnimationConfigBuilder {
    this.config.direction = value;
    return this;
  }

  build(): AnimationConfig {
    if (this.config.duration === undefined) {
      throw new Error('Duration is required for animation config');
    }

    return {
      duration: this.config.duration,
      delay: this.config.delay,
      easing: this.config.easing,
      repeat: this.config.repeat,
      direction: this.config.direction,
    };
  }

  static create(): AnimationConfigBuilder {
    return new AnimationConfigBuilder();
  }
}