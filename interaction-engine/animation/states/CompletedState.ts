// src/composer-tools/interaction-engine/animation/states/CompletedState.ts

import { AnimationState } from './AnimationState';
import { AnimationController } from '../AnimationController';
import { RunningState } from './RunningState';

export class CompletedState implements AnimationState {
  play(controller: AnimationController): void {
    controller.setState(new RunningState());
  }

  stop(controller: AnimationController): void {
    // Already completed, no-op
  }
}