// src/composer-tools/interaction-engine/schema/InteractionSchema.ts

import type { CommandConfig } from '../core/types';

export interface InteractionDefinition {
  id: string;
  trigger: string;
  command: string;
  config: CommandConfig | Record<string, any>;
}

export interface ElementInteractionsSchema {
  elementId: string;
  interactions: InteractionDefinition[];
}

export interface InteractionSchema {
  version: string;
  elements: ElementInteractionsSchema[];
}