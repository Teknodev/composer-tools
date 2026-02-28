// src/composer-tools/interaction-engine/factory/InteractionFactory.ts

import { InteractionCommand } from '../core/types';

export type CommandFactory<T extends Record<string, any> = Record<string, any>> = (config: T) => InteractionCommand;

export abstract class BaseFactory<T, F> {
  protected registry = new Map<string, F>();

  register(type: string, factory: F): void {
    this.registry.set(type, factory);
  }

  getRegisteredTypes(): string[] {
    return Array.from(this.registry.keys());
  }

  isRegistered(type: string): boolean {
    return this.registry.has(type);
  }

  unregister(type: string): boolean {
    return this.registry.delete(type);
  }

  protected getFactory(type: string): F | undefined {
    return this.registry.get(type);
  }
}

export class InteractionFactory extends BaseFactory<InteractionCommand, CommandFactory> {
  create(type: string, config: Record<string, any> = {}): InteractionCommand {
    const factory = this.getFactory(type);
    if (!factory) {
      throw new Error(`Unknown interaction command type: ${type}`);
    }
    return factory(config);
  }
}