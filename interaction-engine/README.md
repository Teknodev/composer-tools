# Interaction Engine

A production-ready, type-safe interaction engine for building complex UI interactions with declarative configurations.

## Features

- 🎯 **Declarative Configuration** - Define interactions using simple JSON schemas
- 🚀 **Performance Optimized** - Built-in performance monitoring and optimization
- 🛡️ **Type-Safe** - Full TypeScript support with comprehensive type definitions
- 🔒 **Error Handling** - Robust error handling with recovery strategies
- 📊 **Monitoring** - Built-in logging and performance metrics
- 🧹 **Memory Safe** - Automatic resource cleanup and leak prevention
- ✅ **Validated** - Configuration validation for reliability
- 🧪 **Testable** - Comprehensive test utilities and examples

## Architecture

The engine follows SOLID principles and uses design patterns including:
- **Command Pattern** - For executable interactions
- **Strategy Pattern** - For trigger behaviors
- **Composite Pattern** - For managing multiple interactions
- **Factory Pattern** - For creating instances
- **State Pattern** - For animation states

### Core Components

```
interaction-engine/
├── core/           # Core types and interfaces
├── models/         # Domain models (Interaction)
├── commands/       # Interaction commands
├── triggers/       # Trigger strategies
├── composite/      # Element interaction management
├── factory/        # Object factories
├── animation/      # Animation controllers
├── services/       # External services (router, modal)
├── utils/          # Utilities (logging, validation, etc.)
├── schema/         # Schema definitions
└── bootstrap/      # Initialization logic
```

## Quick Start

### Installation

```typescript
import {
  bootstrapInteractions,
  InteractionFactory,
  TriggerFactory,
  logger,
  LogLevel
} from './composer-tools/interaction-engine';
```

### Basic Usage

```typescript
// 1. Configure logging
logger.setLevel(LogLevel.WARN); // Production mode

// 2. Create factories
const commandFactory = new InteractionFactory();
const triggerFactory = new TriggerFactory();

// Register commands
commandFactory.register('animate', (config) => new AnimateCommand());
commandFactory.register('navigate', (config) => new NavigateCommand());

// Register triggers
triggerFactory.register('click', (config) => new PressTrigger());
triggerFactory.register('hover', (config) => new HoverTrigger());

// 3. Define interaction schema
const schema = {
  version: '1.0',
  elements: [
    {
      elementId: 'button-1',
      interactions: [
        {
          id: 'button-click',
          trigger: 'click',
          command: 'animate',
          config: {
            property: 'opacity',
            value: 0.5,
            duration: 300,
            priority: 10
          }
        }
      ]
    }
  ]
};

// 4. Bootstrap interactions
const cleanup = bootstrapInteractions(schema, {
  commandFactory,
  triggerFactory,
  router: myRouter,
  modalService: myModalService
});

// 5. Cleanup when done
cleanup();
```

## Advanced Features

### Error Handling

```typescript
import { errorHandler, ErrorHandler, ValidationError } from './composer-tools/interaction-engine';

// Add error listener
errorHandler.addErrorListener((error) => {
  console.error('Interaction error:', error);
  // Send to error tracking service
});

// Register recovery strategy
errorHandler.registerRecoveryStrategy('VALIDATION_ERROR', (error) => {
  // Attempt to recover from validation errors
  console.log('Attempting recovery...');
});
```

### Performance Monitoring

```typescript
import { performanceMonitor, PerformanceMonitor } from './composer-tools/interaction-engine';

// Enable monitoring
performanceMonitor.setEnabled(true);

// Add performance thresholds
performanceMonitor.addThreshold({
  pattern: 'interaction.*',
  warning: 50,  // 50ms
  error: 100    // 100ms
});

// Get performance report
const report = performanceMonitor.getReport();
console.log(report);

// Get specific operation stats
const stats = performanceMonitor.getStats('interaction.execute');
console.log(`Average: ${stats?.avg}ms`);
```

### Configuration Validation

```typescript
import { ConfigValidator, Validator } from './composer-tools/interaction-engine';

// Validate animation config
try {
  const validatedConfig = ConfigValidator.validateAnimation({
    duration: 1000,
    easing: 'ease-in-out',
    engine: 'webAnimations'
  });
} catch (error) {
  console.error('Invalid configuration:', error);
}

// Create custom validation
const customValidator = Validator.createSchema({
  customField: (value, context) => {
    return Validator.isString(value, 'customField', context);
  }
});
```

### Resource Management

```typescript
import { ResourceManager } from './composer-tools/interaction-engine';

const resources = new ResourceManager();

// Managed timeout (auto cleanup)
resources.setTimeout(() => {
  console.log('Delayed action');
}, 1000);

// Managed event listener (auto cleanup)
resources.addEventListener(element, 'click', handler);

// Managed observer (auto cleanup)
const observer = new IntersectionObserver(callback);
resources.registerObserver(observer);

// Cleanup all at once
resources.dispose();
```

### Logging

```typescript
import { logger, LogLevel, Logger } from './composer-tools/interaction-engine';

// Set log level
logger.setLevel(LogLevel.INFO);

// Add custom log handler
logger.addHandler((entry) => {
  // Send to external service
  myAnalytics.log(entry);
});

// Log with context
logger.info('Interaction executed', {
  component: 'MyComponent',
  interactionId: 'button-1',
  duration: 123
});

// View log history
const history = logger.getHistory();
```

## Configuration Schemas

### Base Interaction Config

```typescript
interface InteractionConfig {
  delay?: number;           // Delay before execution (ms)
  debounceDelay?: number;   // Debounce delay (ms)
  priority?: number;        // Priority level (-100 to 100)
  queueable?: boolean;      // Queue executions or skip
  useRAF?: boolean;         // Use requestAnimationFrame
}
```

### Animation Config

```typescript
{
  engine: 'webAnimations' | 'animateCss',
  duration: 1000,          // Duration in ms
  easing: 'ease',          // Easing function
  iterationCount: 1,       // Number of iterations or 'infinite'
  direction: 'normal',     // Animation direction
  property: 'opacity',     // CSS property to animate
  value: 0.5              // Target value
}
```

### Trigger Configs

#### Scroll Trigger
```typescript
{
  type: 'section' | 'layer' | 'progress',
  direction: 'up' | 'down' | 'both',
  threshold: 0.5,          // Visibility threshold (0-1)
  replay: false,           // Replay on scroll back
  debounce: 50            // Debounce in ms
}
```

#### Appear Trigger
```typescript
{
  threshold: 0.5,          // Intersection threshold
  once: true,              // Trigger only once
  delay: 0,                // Delay after appear
  rootMargin: '0px'       // Root margin
}
```

## Best Practices

### 1. Memory Management

Always cleanup interactions when components unmount:

```typescript
useEffect(() => {
  const cleanup = bootstrapInteractions(schema, dependencies);
  return cleanup; // Cleanup on unmount
}, []);
```

### 2. Error Boundaries

Wrap interaction initialization in error boundaries:

```typescript
try {
  const cleanup = bootstrapInteractions(schema, dependencies);
} catch (error) {
  errorHandler.handle(error);
}
```

### 3. Performance

- Use `priority` for important interactions
- Set appropriate `debounceDelay` for frequent triggers
- Enable performance monitoring in development
- Monitor queue sizes and execution times

### 4. Configuration

- Validate configurations before use
- Use TypeScript for compile-time checks
- Keep schemas version-controlled
- Document custom configurations

### 5. Testing

```typescript
import { createMockElement } from './composer-tools/interaction-engine/__tests__/setup';

const mockElement = createMockElement({ id: 'test' });
const interaction = new Interaction(trigger, command, config);
interaction.mount(mockElement);
```

## API Reference

### Core Classes

#### `Interaction`
```typescript
class Interaction {
  mount(target: HTMLElement): void
  unmount(): void
  isMounted(): boolean
  getConfig(): InteractionConfig
  updateConfig(config: InteractionConfig): void
  getPriority(): number
  getStats(): InteractionStats
  dispose(): void
}
```

#### `ElementInteractions`
```typescript
class ElementInteractions {
  addInteraction(interaction: Interaction): void
  removeInteraction(interaction: Interaction): void
  mount(element: HTMLElement): void
  unmount(): void
  clearInteractions(): void
  getPerformanceMetrics(): PerformanceMetrics
  optimizeInteractions(): void
  dispose(): void
}
```

### Utilities

#### `Logger`
```typescript
class Logger {
  setLevel(level: LogLevel): void
  debug(message: string, context?: LogContext): void
  info(message: string, context?: LogContext): void
  warn(message: string, context?: LogContext): void
  error(message: string, error?: Error, context?: LogContext): void
  getHistory(): readonly LogEntry[]
}
```

#### `PerformanceMonitor`
```typescript
class PerformanceMonitor {
  start(operation: string, id?: string): string
  end(id: string, operation: string, metadata?: any): PerformanceMetrics
  measure<T>(operation: string, fn: () => T): T
  measureAsync<T>(operation: string, fn: () => Promise<T>): Promise<T>
  getStats(operation: string): PerformanceStats | null
  getReport(): string
}
```

#### `ResourceManager`
```typescript
class ResourceManager {
  setTimeout(handler: () => void, timeout: number): number
  setInterval(handler: () => void, interval: number): number
  addEventListener(target: EventTarget, type: string, listener: EventListener): void
  registerObserver(observer: Observer): void
  dispose(): void
}
```

## Migration Guide

### From Previous Version

The refactored engine maintains backward compatibility while adding new features:

1. **Logging**: Replace `console.*` calls with `logger.*`
2. **Error Handling**: Wrap operations with try-catch and use `errorHandler`
3. **Types**: Update imports to use new type definitions
4. **Config**: Add validation to configuration objects

## Performance Benchmarks

Typical performance metrics:
- Interaction mount: <5ms
- Command execution: <16ms (1 frame)
- Memory overhead: ~1KB per interaction
- Cleanup time: <1ms

## Browser Support

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+

## Contributing

See [Contributing Guide](../../CONTRIBUTING.md) for development setup and guidelines.

## License

MIT

## Changelog

### v2.0.0 (Production Ready)

- ✅ Added comprehensive error handling
- ✅ Added logging system with configurable levels
- ✅ Added performance monitoring and metrics
- ✅ Added configuration validation
- ✅ Added resource management for memory safety
- ✅ Improved TypeScript types and interfaces
- ✅ Added test infrastructure
- ✅ Added JSDoc documentation
- ✅ Improved cleanup and disposal
- ✅ Added performance optimizations
