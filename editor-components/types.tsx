// Base interaction types
export interface BaseInteraction {
  id: string;
  type: InteractionTriggerType;
  action: InteractionActionType;
  visible_on: DeviceType;
  display_option: DisplayOptionType;
  delay_seconds?: number;
}

export interface LinkInteraction extends BaseInteraction {
  action: 'link';
  link_type: LinkType;
  url?: string;
  page_id?: string;
  section_id?: string;
}

export interface ModalInteraction extends BaseInteraction {
  action: 'modal';
  modal_id: string;
}

export interface AnimationInteraction extends BaseInteraction {
  action: 'animation';
  animation_type: AnimationType;
  duration?: number;
  easing?: string;
}

export type InteractionType = LinkInteraction | ModalInteraction | AnimationInteraction;

// Enums for better type safety
export type InteractionTriggerType = 'click' | 'hover' | 'scroll' | 'load';
export type InteractionActionType = 'link' | 'modal' | 'animation';
export type DeviceType = 'all' | 'desktop' | 'tablet' | 'mobile';
export type DisplayOptionType = 'show_once' | 'show_always' | 'show_with_delay';
export type LinkType = 'external' | 'internal' | 'section';
export type AnimationType = 'fade' | 'slide' | 'bounce' | 'zoom';

// Configuration interfaces
export interface InteractionConfig {
  triggers: { value: InteractionTriggerType; label: string }[];
  actions: { value: InteractionActionType; label: string }[];
  devices: { value: DeviceType; label: string }[];
  displayOptions: { value: DisplayOptionType; label: string }[];
}

export interface InteractionChangeData {
  value: string | number | boolean;
  property: string;
}
