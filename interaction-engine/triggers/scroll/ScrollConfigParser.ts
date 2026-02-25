// src/composer-tools/interaction-engine/triggers/scroll/ScrollConfigParser.ts

import { OnScrollConfig } from './types';

/**
 * Parse scroll trigger configuration from constructor config or data attributes.
 * Returns a fully-defaulted OnScrollConfig object.
 */
export function parseScrollConfig(
  target: HTMLElement,
  interactionConfig?: OnScrollConfig
): OnScrollConfig {
  if (interactionConfig) {
    return parseFromConstructorConfig(interactionConfig);
  }
  return parseFromDataAttributes(target);
}

function parseFromConstructorConfig(raw: OnScrollConfig): OnScrollConfig {
  const config = { ...raw };

  // Set defaults
  if (!config.type) config.type = 'direction';
  if (!config.direction) config.direction = 'both';
  if (config.threshold === undefined) config.threshold = 0;
  if (config.replay === undefined) config.replay = false;
  if (config.debounceDelay === undefined) config.debounceDelay = 50;
  if (config.minProgressHeight === undefined) config.minProgressHeight = 150;

  // Map direct animation properties to custom* properties for progress effects.
  if (config.opacity !== undefined && config.opacity !== 1) {
    config.customOpacityEnd = config.opacity;
    config.customOpacityStart = 0;
  }
  if (config.scale !== undefined && config.scale !== 1) {
    config.customScaleEnd = config.scale;
    config.customScaleStart = 0.8;
  }
  if (config.translateX !== undefined) {
    config.customTranslateX =
      typeof config.translateX === 'string' ? parseFloat(config.translateX) : config.translateX;
  }
  if (config.translateY !== undefined) {
    config.customTranslateY =
      typeof config.translateY === 'string' ? parseFloat(config.translateY) : config.translateY;
  }
  if (config.rotate?.z !== undefined && config.rotate.z !== 0) {
    config.customRotate = config.rotate.z;
  }

  // Auto-promote progressEffect to "custom" when direct animation
  // properties were mapped but no explicit effect was chosen.
  if (config.type === 'progress' && !config.progressEffect) {
    const hasCustomProps =
      config.customTranslateX !== undefined ||
      config.customTranslateY !== undefined ||
      config.customScaleStart !== undefined ||
      config.customScaleEnd !== undefined ||
      config.customOpacityStart !== undefined ||
      config.customOpacityEnd !== undefined ||
      config.customRotate !== undefined ||
      config.customBlur !== undefined;
    if (hasCustomProps) {
      config.progressEffect = 'custom';
    }
  }

  return config;
}

function parseFromDataAttributes(target: HTMLElement): OnScrollConfig {
  const config: OnScrollConfig = {};

  const typeAttr = target.getAttribute('data-scroll-type');
  if (
    typeAttr &&
    (typeAttr === 'direction' || typeAttr === 'section' || typeAttr === 'layer' || typeAttr === 'progress')
  ) {
    config.type = typeAttr as OnScrollConfig['type'];
  }

  const directionAttr = target.getAttribute('data-scroll-direction');
  if (directionAttr && (directionAttr === 'up' || directionAttr === 'down' || directionAttr === 'both')) {
    config.direction = directionAttr as OnScrollConfig['direction'];
  }

  const thresholdAttr = target.getAttribute('data-scroll-threshold');
  if (thresholdAttr) {
    const parsed = parseFloat(thresholdAttr);
    config.threshold = isNaN(parsed) ? 0 : parsed;
  }

  const replayAttr = target.getAttribute('data-scroll-replay');
  if (replayAttr) {
    config.replay = replayAttr === 'true';
  }

  const debounceAttr = target.getAttribute('data-scroll-debounce');
  if (debounceAttr) {
    const parsed = parseInt(debounceAttr, 10);
    config.debounceDelay = isNaN(parsed) ? 50 : parsed;
  }

  const sectionIdAttr = target.getAttribute('data-scroll-section-id');
  if (sectionIdAttr) config.sectionId = sectionIdAttr;

  const sectionThresholdAttr = target.getAttribute('data-scroll-section-threshold');
  if (sectionThresholdAttr) {
    const parsed = parseFloat(sectionThresholdAttr);
    config.sectionThreshold = isNaN(parsed) ? 0.1 : parsed;
  }

  const sectionRootMarginAttr = target.getAttribute('data-scroll-section-root-margin');
  if (sectionRootMarginAttr) config.sectionRootMargin = sectionRootMarginAttr;

  const layerThresholdAttr = target.getAttribute('data-scroll-layer-threshold');
  if (layerThresholdAttr) {
    const parsed = parseFloat(layerThresholdAttr);
    config.layerThreshold = isNaN(parsed) ? 0.1 : parsed;
  }

  const layerRootMarginAttr = target.getAttribute('data-scroll-layer-root-margin');
  if (layerRootMarginAttr) config.layerRootMargin = layerRootMarginAttr;

  const progressEffectAttr = target.getAttribute('data-scroll-progress-effect');
  if (
    progressEffectAttr &&
    ['fade', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'scale', 'custom'].includes(progressEffectAttr)
  ) {
    config.progressEffect = progressEffectAttr as OnScrollConfig['progressEffect'];
  }

  const progressStartAttr = target.getAttribute('data-scroll-progress-start');
  if (progressStartAttr) {
    const parsed = parseFloat(progressStartAttr);
    config.progressStart = isNaN(parsed) ? 0 : parsed;
  }

  const progressEndAttr = target.getAttribute('data-scroll-progress-end');
  if (progressEndAttr) {
    const parsed = parseFloat(progressEndAttr);
    config.progressEnd = isNaN(parsed) ? 1 : parsed;
  }

  // Custom progress attributes
  const numericAttrs: Array<{ attr: string; key: keyof OnScrollConfig }> = [
    { attr: 'data-scroll-custom-opacity-start', key: 'customOpacityStart' },
    { attr: 'data-scroll-custom-opacity-end', key: 'customOpacityEnd' },
    { attr: 'data-scroll-custom-translate-x', key: 'customTranslateX' },
    { attr: 'data-scroll-custom-translate-y', key: 'customTranslateY' },
    { attr: 'data-scroll-custom-scale-start', key: 'customScaleStart' },
    { attr: 'data-scroll-custom-scale-end', key: 'customScaleEnd' },
    { attr: 'data-scroll-custom-rotate', key: 'customRotate' },
    { attr: 'data-scroll-custom-blur', key: 'customBlur' },
    { attr: 'data-scroll-min-progress-height', key: 'minProgressHeight' },
  ];

  for (const { attr, key } of numericAttrs) {
    const val = target.getAttribute(attr);
    if (val) {
      const parsed = parseFloat(val);
      if (!isNaN(parsed)) {
        (config as any)[key] = parsed;
      }
    }
  }

  // Set defaults
  if (!config.type) config.type = 'direction';
  if (!config.direction) config.direction = 'both';
  if (config.threshold === undefined) config.threshold = 0;
  if (config.replay === undefined) config.replay = false;
  if (config.debounceDelay === undefined) config.debounceDelay = 50;
  if (config.minProgressHeight === undefined) config.minProgressHeight = 80;

  return config;
}
