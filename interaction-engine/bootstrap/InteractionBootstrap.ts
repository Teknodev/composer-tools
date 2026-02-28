// src/composer-tools/interaction-engine/bootstrap/InteractionBootstrap.ts

import { InteractionSchema } from '../schema/InteractionSchema';
import { Interaction } from '../models/Interaction';
import { ElementInteractions } from '../composite/ElementInteractions';
import { InteractionFactory } from '../factory/InteractionFactory';
import { TriggerFactory } from '../factory/TriggerFactory';
import { Router, ModalService } from '../core/types';
import { ConfigValidator } from '../schema/ConfigValidator';
import { logger } from '../utils/Logger';

export interface BootstrapDependencies {
  commandFactory: InteractionFactory;
  triggerFactory: TriggerFactory;
  router?: Router;
  modalService?: ModalService;
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

          // Validate config before creating the command
          const validation = ConfigValidator.validate(config, interactionDef.command);
          if (!validation.valid) {
            logger.error(`InteractionBootstrap: invalid config for interaction "${interactionDef.id}"`, validation.errors);
            continue;
          }

          // Create trigger/command with the possibly-augmented config
          const trigger = dependencies.triggerFactory.create(interactionDef.trigger, config);
          const commandType = interactionDef.command;
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
  };

  return () => {
    for (const elementInteractions of elementInteractionsMap.values()) {
      elementInteractions.unmount();
    }
    elementInteractionsMap.clear();
    delete (window as any).interactionServices;
  };
}