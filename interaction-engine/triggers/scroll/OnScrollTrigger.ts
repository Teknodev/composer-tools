// src/composer-tools/interaction-engine/triggers/scroll/OnScrollTrigger.ts

import { BaseTrigger } from '../TriggerStrategy';
import { OnScrollConfig, ScrollModeStrategy } from './types';
import { parseScrollConfig } from './ScrollConfigParser';
import { DirectionScrollStrategy } from './DirectionScrollStrategy';
import { SectionScrollStrategy } from './SectionScrollStrategy';
import { LayerScrollStrategy } from './LayerScrollStrategy';
import { ProgressScrollStrategy } from './ProgressScrollStrategy';

export class OnScrollTrigger extends BaseTrigger {
  private interactionConfig?: OnScrollConfig;
  private strategy?: ScrollModeStrategy;

  constructor(config?: OnScrollConfig) {
    super();
    this.interactionConfig = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;

    const config = parseScrollConfig(target, this.interactionConfig);

    switch (config.type) {
      case 'section':
        this.strategy = new SectionScrollStrategy();
        break;
      case 'layer':
        this.strategy = new LayerScrollStrategy();
        break;
      case 'progress':
        this.strategy = new ProgressScrollStrategy();
        break;
      default:
        this.strategy = new DirectionScrollStrategy();
        break;
    }

    this.strategy.attach(
      target,
      fire,
      cleanup,
      config,
      this.addEventListener.bind(this)
    );
  }

  detach(): void {
    if (this.strategy) {
      this.strategy.detach();
      this.strategy = undefined;
    }
    super.detach();
  }
}
