// src/composer-tools/interaction-engine/animation/states/AnimationState.ts

export interface AnimationState {
  play(controller: AnimationController): void;
  stop(controller: AnimationController): void;
}