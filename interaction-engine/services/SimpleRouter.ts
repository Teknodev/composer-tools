// src/composer-tools/interaction-engine/services/SimpleRouter.ts

import { Router } from '../core/types';
import { ValidationError } from '../utils/ErrorHandler';
import { logger } from '../utils/Logger';

/** Protocols considered dangerous for navigation targets */
const BLOCKED_PROTOCOLS = /^\s*(javascript|data|vbscript)\s*:/i;

export class SimpleRouter implements Router {
  navigate(path: string): void {
    if (BLOCKED_PROTOCOLS.test(path)) {
      throw new ValidationError(`Blocked navigation to unsafe URL: "${path}"`, {
        component: 'SimpleRouter',
        url: path,
      });
    }

    logger.debug('SimpleRouter: navigating', { path });
    window.location.href = path;
  }
}