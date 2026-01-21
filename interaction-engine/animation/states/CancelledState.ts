// src/composer-tools/interaction-engine/animation/states/CancelledState.ts

import { AnimationState } from './AnimationState';
import { AnimationController } from '../AnimationController';
import { RunningState } from './RunningState';

export class CancelledState implements AnimationState {
  play(controller: AnimationController): void {
    controller.setState(new RunningState());
  }

  stop(controller: AnimationController): void {
    // Already cancelled, no-op
  }
}