// src/composer-tools/interaction-engine/factory/TriggerFactory.ts

import { TriggerStrategy } from '../triggers/TriggerStrategy';
import { BaseFactory } from './InteractionFactory';

export type TriggerFactoryFn = (config?: Record<string, any>) => TriggerStrategy;

export class TriggerFactory extends BaseFactory<TriggerStrategy, TriggerFactoryFn> {
  create(type: string, config?: Record<string, any>): TriggerStrategy {
    const factory = this.getFactory(type);
    if (!factory) {
      throw new Error(`Unknown trigger type: ${type}`);
    }
    return factory(config);
  }
}