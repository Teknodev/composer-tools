// src/composer-tools/interaction-engine/animation/states/IdleState.ts

import { AnimationState } from './AnimationState';
import { AnimationController } from '../AnimationController';
import { RunningState } from './RunningState';

export class IdleState implements AnimationState {
  play(controller: AnimationController): void {
    controller.setState(new RunningState());
  }

  stop(controller: AnimationController): void {
    // Already idle, no-op
  }
}