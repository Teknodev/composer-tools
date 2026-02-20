// src/composer-tools/interaction-engine/text-animations/types.ts

export interface TextAnimationConfig {
  trigger: TriggerType;
  preset: string;
  granularity: GranularityType;
  enterEffect?: EnterEffectProperties;
  transition?: TransitionConfig;
}

export type TriggerType = 'hover' | 'click' | 'load' | 'scroll';
export type GranularityType = 'character' | 'word' | 'layer' | 'element';

export interface EnterEffectProperties {
  opacity: PropertyValue;
  scale: PropertyValue;
  blur: PropertyValue;
  rotate: PropertyValue;
  skew: PropertyValue;
  offset: PropertyValue;
}

export interface PropertyValue {
  value: number;
  unit: string;
  active: boolean;
}

export interface TransitionConfig {
  type: 'ease' | 'spring';
  ease: EaseConfig;
  spring: SpringConfig;
  timeline: TimelineData;
}

export interface EaseConfig {
  easing: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  duration: number;
}

export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

export interface TimelineData {
  duration: number;
  delay: number;
  keyframes: Keyframe[];
  easeType: 'preset' | 'custom';
  selectedEase: string;
}

export interface Keyframe {
  time: number;
  value: number;
  handles?: BezierHandle;
}

export interface BezierHandle {
  in: { x: number; y: number };
  out: { x: number; y: number };
}

export interface NavigationState {
  stack: NavigationLevel[];
  currentLevel: NavigationLevel;
}

export interface NavigationLevel {
  id: string;
  title: string;
  config: Partial<TextAnimationConfig>;
  breadcrumb: string[];
  parentId?: string;
}

export interface TextPreviewState {
  isPlaying: boolean;
  currentTime: number;
  speed: number;
  error: string | null;
}

export interface TextAnimationState {
  config: TextAnimationConfig;
  navigation: NavigationState;
  preview: TextPreviewState;
}

export interface TextAnimationPreset {
  id: string;
  name: string;
  description: string;
  defaultConfig: Partial<any>; // Adjust based on actual config
  visibleControls: ControlVisibility;
  restrictions: PropertyRestrictions;
  previewScript: string;
}

export interface ControlVisibility {
  basicSettings: boolean;
  timingControls: boolean;
  advancedOptions: boolean;
  specificFields: string[];
}

export interface PropertyRestrictions {
  lockedFields: string[];
  hiddenFields: string[];
  valueConstraints: Record<string, any>;
}