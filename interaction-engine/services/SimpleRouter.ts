// src/composer-tools/interaction-engine/services/SimpleRouter.ts

import { Router } from '../core/types';

export class SimpleRouter implements Router {
  navigate(path: string): void {
    window.location.href = path;
  }
}