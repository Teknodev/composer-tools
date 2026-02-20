// src/composer-tools/interaction-engine/animation/states/RunningState.ts

import { AnimationState } from './AnimationState';
import { AnimationController } from '../AnimationController';
import { CancelledState } from './CancelledState';

export class RunningState implements AnimationState {
  play(controller: AnimationController): void {
    // Already running, no-op
  }

  stop(controller: AnimationController): void {
    controller.setState(new CancelledState());
  }
}