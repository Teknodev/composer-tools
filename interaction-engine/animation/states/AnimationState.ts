// src/composer-tools/interaction-engine/animation/states/AnimationState.ts

import type { AnimationController } from '../AnimationController';

export interface AnimationState {
  play(controller: AnimationController): void;
  stop(controller: AnimationController): void;
}