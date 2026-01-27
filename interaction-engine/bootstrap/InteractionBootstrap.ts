// src/composer-tools/interaction-engine/bootstrap/InteractionBootstrap.ts

import { InteractionSchema, InteractionDefinition } from '../schema/InteractionSchema';
import { Interaction } from '../models/Interaction';
import { ElementInteractions } from '../composite/ElementInteractions';
import { InteractionFactory } from '../factory/InteractionFactory';
import { TriggerFactory } from '../factory/TriggerFactory';
import { Router, ModalService, AnimationEngine } from '../core/types';
import { logger } from '../utils/Logger';

export interface BootstrapDependencies {
  commandFactory: InteractionFactory;
  triggerFactory: TriggerFactory;
  router?: Router;
  modalService?: ModalService;
  animationEngine?: AnimationEngine;
}

// Helper function to apply config to element as data attributes
function applyConfigToElement(element: HTMLElement, interactionDef: InteractionDefinition): void {
  const { trigger, config } = interactionDef;
  
  // Apply scroll trigger config
  if (trigger === 'scroll' && config) {
    if (config.type) element.setAttribute('data-scroll-type', config.type);
    if (config.direction) element.setAttribute('data-scroll-direction', config.direction);
    if (config.threshold !== undefined) element.setAttribute('data-scroll-threshold', config.threshold.toString());
    if (config.replay !== undefined) element.setAttribute('data-scroll-replay', config.replay.toString());
    if (config.debounce !== undefined) element.setAttribute('data-scroll-debounce', config.debounce.toString());
    if (config.debounceDelay !== undefined) element.setAttribute('data-scroll-debounce', config.debounceDelay.toString());
    if (config.sectionId) element.setAttribute('data-scroll-section-id', config.sectionId);
    if (config.sectionThreshold !== undefined) element.setAttribute('data-scroll-section-threshold', config.sectionThreshold.toString());
    if (config.sectionRootMargin) element.setAttribute('data-scroll-section-root-margin', config.sectionRootMargin);
    if (config.layerThreshold !== undefined) element.setAttribute('data-scroll-layer-threshold', config.layerThreshold.toString());
    if (config.layerRootMargin) element.setAttribute('data-scroll-layer-root-margin', config.layerRootMargin);
    if (config.progressEffect) element.setAttribute('data-scroll-progress-effect', config.progressEffect);
    if (config.progressStart !== undefined) element.setAttribute('data-scroll-progress-start', config.progressStart.toString());
    if (config.progressEnd !== undefined) element.setAttribute('data-scroll-progress-end', config.progressEnd.toString());
    if (config.customOpacityStart !== undefined) element.setAttribute('data-scroll-custom-opacity-start', config.customOpacityStart.toString());
    if (config.customOpacityEnd !== undefined) element.setAttribute('data-scroll-custom-opacity-end', config.customOpacityEnd.toString());
    if (config.customTranslateX !== undefined) element.setAttribute('data-scroll-custom-translate-x', config.customTranslateX.toString());
    if (config.customTranslateY !== undefined) element.setAttribute('data-scroll-custom-translate-y', config.customTranslateY.toString());
    if (config.customScaleStart !== undefined) element.setAttribute('data-scroll-custom-scale-start', config.customScaleStart.toString());
    if (config.customScaleEnd !== undefined) element.setAttribute('data-scroll-custom-scale-end', config.customScaleEnd.toString());
    if (config.customRotate !== undefined) element.setAttribute('data-scroll-custom-rotate', config.customRotate.toString());
    if (config.customBlur !== undefined) element.setAttribute('data-scroll-custom-blur', config.customBlur.toString());
  }
  
  // Apply appear trigger config
  if (trigger === 'appear' && config) {
    if (config.threshold !== undefined) element.setAttribute('data-appear-threshold', config.threshold.toString());
    if (config.once !== undefined) element.setAttribute('data-appear-once', config.once.toString());
    if (config.delay !== undefined) element.setAttribute('data-appear-delay', config.delay.toString());
    if (config.rootMargin) element.setAttribute('data-appear-root-margin', config.rootMargin);
  }
  
  // Apply load trigger config
  if (trigger === 'load' && config) {
    if (config.delay !== undefined) element.setAttribute('data-load-delay', config.delay.toString());
    if (config.waitForImages !== undefined) element.setAttribute('data-load-wait-images', config.waitForImages.toString());
    if (config.waitForElement !== undefined) element.setAttribute('data-load-wait-element', config.waitForElement.toString());
  }
}

export function bootstrapInteractions(
  schema: InteractionSchema,
  dependencies: BootstrapDependencies
): () => void {
  const elementInteractionsMap = new Map<string, ElementInteractions>();
  for (const elementSchema of schema.elements) {
    // Check if elementId is a class name (starts with auto-generate or contains spaces)
    const isClassName = elementSchema.elementId.startsWith('auto-generate-') || elementSchema.elementId.includes(' ');
    let elements: Element[] = [];
    
    if (isClassName) {
      // For class names, try exact token first and fall back to prefixed token
      let nodeList = document.querySelectorAll(`[class~="${elementSchema.elementId}"]`);
      if (nodeList.length === 0 && !elementSchema.elementId.startsWith('auto-generate-')) {
        nodeList = document.querySelectorAll(`[class~="auto-generate-${elementSchema.elementId}"]`);
        logger.debug('InteractionBootstrap: fallback to prefixed class token', { requested: elementSchema.elementId, prefixed: `auto-generate-${elementSchema.elementId}`, nodeList });
      } else {
        logger.debug('InteractionBootstrap: found elements for', { elementId: elementSchema.elementId, nodeList });
      }
      elements = Array.from(nodeList);
    } else {
      // For IDs, use data attribute or getElementById (single element)
      const element = document.querySelector(`[data-element-id="${elementSchema.elementId}"]`) ||
                      document.getElementById(elementSchema.elementId);
      if (element) {
        elements = [element];
      }
    }
    
    if (elements.length === 0) {
      logger.warn(`InteractionBootstrap: Element with ${isClassName ? 'class' : 'id'} "${elementSchema.elementId}" not found, skipping interactions`);
      continue;
    }

    // Apply interactions to all matching elements
    elements.forEach((element, index) => {
      const elementInteractions = new ElementInteractions();
      // Debug: report mounting target
      logger.debug(`InteractionBootstrap: mounting interactions for element "${elementSchema.elementId}" (instance ${index})`, { element });

      for (const interactionDef of elementSchema.interactions) {
        try {
          // Ensure loop trigger configs include a loopType default so commands
          // can detect loop mode even if the stored schema omitted it.
          const config = { ...(interactionDef.config || {}) };
          if (interactionDef.trigger === 'loop' && config.loopType === undefined) {
            config.loopType = 'loop';
          }

          // Create trigger/command with the possibly-augmented config
          const trigger = dependencies.triggerFactory.create(interactionDef.trigger, config);

          // Backwards-compatibility: if schema uses generic `animate` command but
          // includes `textAnimation` config or the trigger is `textAnimate`, prefer
          // the specialized `textAnimate` command so text animations run correctly.
          let commandType = interactionDef.command;
          if (
            commandType === 'animate' &&
            (interactionDef.trigger === 'textAnimate' || (config && config.textAnimation))
          ) {
            logger.debug('InteractionBootstrap: switching command type to textAnimate for text animation config', { interactionId: interactionDef.id });
            commandType = 'textAnimate';
          }

          const command = dependencies.commandFactory.create(commandType, config);

          const interaction = new Interaction(trigger, command, config, interactionDef.trigger);
          elementInteractions.addInteraction(interaction);
          // Debug: report added interaction
          logger.debug(`InteractionBootstrap: added interaction "${interactionDef.id}" -> trigger:"${interactionDef.trigger}" command:"${interactionDef.command}" on element "${elementSchema.elementId}"`);
        } catch (error) {
          logger.error(`Failed to create interaction "${interactionDef.id}":`, error);
        }
      }

      elementInteractions.mount(element as HTMLElement);
      
      // Store with unique key for each element instance
      const mapKey = isClassName ? `${elementSchema.elementId}-${index}` : elementSchema.elementId;
      elementInteractionsMap.set(mapKey, elementInteractions);
    });
  }

  // Store services globally for context access
  (window as any).interactionServices = {
    router: dependencies.router,
    modalService: dependencies.modalService,
    animationEngine: dependencies.animationEngine
  };

  return () => {
    for (const elementInteractions of elementInteractionsMap.values()) {
      elementInteractions.unmount();
    }
    elementInteractionsMap.clear();
    delete (window as any).interactionServices;
  };
}