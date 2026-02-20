// src/composer-tools/interaction-engine/animation/AnimationController.ts

import { AnimationState } from './states/AnimationState';

export class AnimationController {
  private currentState: AnimationState;

  constructor(initialState: AnimationState) {
    this.currentState = initialState;
  }

  setState(state: AnimationState): void {
    this.currentState = state;
  }

  play(): void {
    this.currentState.play(this);
  }

  stop(): void {
    this.currentState.stop(this);
  }

  getCurrentState(): AnimationState {
    return this.currentState;
  }
}