import { BaseTrigger } from './TriggerStrategy';

export class LoopTrigger extends BaseTrigger {
  private config?: Record<string, any>;

  constructor(config?: Record<string, any>) {
    super();
    this.config = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;

    // Start immediately when attached
    try {
      fire();
    } catch (err) {
      // swallow
    }
  }

  detach(): void {
    // Call cleanup on detach if provided (before super.detach nulls it)
    try {
      this.cleanup?.();
    } catch (err) {
      /* ignore */
    }
    super.detach();
  }
}
