// src/composer-tools/interaction-engine/schema/InteractionSchema.ts

export interface InteractionDefinition {
  id: string;
  trigger: string;
  command: string;
  config: Record<string, any>;
}

export interface ElementInteractionsSchema {
  elementId: string;
  interactions: InteractionDefinition[];
}

export interface InteractionSchema {
  version: string;
  elements: ElementInteractionsSchema[];
}