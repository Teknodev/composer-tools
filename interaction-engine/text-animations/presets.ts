// src/composer-tools/interaction-engine/text-animations/presets.ts

import { TextAnimationPreset } from './types';

export const TEXT_ANIMATION_PRESETS: Record<string, TextAnimationPreset> = {
  blur: {
    id: 'blur',
    name: 'Blur',
    description: 'Fades in with blur effect',
    defaultConfig: {
      type: 'fadeIn',
      timing: { duration: 1000, easing: 'ease-out' },
      advanced: { characterEffects: [{ type: 'blur', value: '10px' }] }
    },
    visibleControls: { basicSettings: true, timingControls: true, advancedOptions: false, specificFields: ['duration', 'easing'] },
    restrictions: { lockedFields: ['type'], hiddenFields: ['staggerDelay'], valueConstraints: { duration: { min: 500 } } },
    previewScript: 'element.style.filter = "blur(10px)"; element.animate([{ filter: "blur(10px)", opacity: 0 }, { filter: "none", opacity: 1 }], { duration: 1000 });'
  },
  flip: {
    id: 'flip',
    name: 'Flip',
    description: 'Rotates text into view',
    defaultConfig: { type: 'slideUp', timing: { duration: 800 }, advanced: { characterEffects: [{ type: 'rotate', value: '180deg' }] } },
    visibleControls: { basicSettings: true, timingControls: true, advancedOptions: false, specificFields: ['duration'] },
    restrictions: { lockedFields: ['type'], hiddenFields: ['delay', 'staggerDelay'], valueConstraints: {} },
    previewScript: 'element.animate([{ transform: "rotateY(180deg)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 800 });'
  },
  shake: {
    id: 'shake',
    name: 'Shake',
    description: 'Shakes text for emphasis',
    defaultConfig: { type: 'fadeIn', timing: { duration: 500, easing: 'ease-in-out' } },
    visibleControls: { basicSettings: true, timingControls: true, advancedOptions: false, specificFields: ['duration', 'easing'] },
    restrictions: { lockedFields: [], hiddenFields: ['delay', 'staggerDelay'], valueConstraints: { duration: { max: 1000 } } },
    previewScript: 'element.animate([{ transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "none" }], { duration: 500, iterations: 3 });'
  },
  shoot: {
    id: 'shoot',
    name: 'Shoot',
    description: 'Text shoots in from off-screen',
    defaultConfig: { type: 'slideUp', timing: { duration: 600 } },
    visibleControls: { basicSettings: true, timingControls: true, advancedOptions: false, specificFields: ['duration'] },
    restrictions: { lockedFields: ['type'], hiddenFields: ['delay'], valueConstraints: {} },
    previewScript: 'element.animate([{ transform: "translateY(100%)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 600 });'
  },
  rotate: {
    id: 'rotate',
    name: 'Rotate',
    description: 'Spins text into place',
    defaultConfig: { type: 'fadeIn', timing: { duration: 700 }, advanced: { characterEffects: [{ type: 'rotate', value: '360deg' }] } },
    visibleControls: { basicSettings: true, timingControls: true, advancedOptions: false, specificFields: ['duration'] },
    restrictions: { lockedFields: [], hiddenFields: ['staggerDelay'], valueConstraints: {} },
    previewScript: 'element.animate([{ transform: "rotate(360deg)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 700 });'
  },
  scale: {
    id: 'scale',
    name: 'Scale',
    description: 'Grows text from small to normal',
    defaultConfig: { type: 'fadeIn', timing: { duration: 900 }, advanced: { characterEffects: [{ type: 'scale', value: 0.5 }] } },
    visibleControls: { basicSettings: true, timingControls: true, advancedOptions: false, specificFields: ['duration'] },
    restrictions: { lockedFields: [], hiddenFields: ['delay'], valueConstraints: {} },
    previewScript: 'element.animate([{ transform: "scale(0.5)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 900 });'
  },
  stagger: {
    id: 'stagger',
    name: 'Stagger',
    description: 'Characters appear one by one',
    defaultConfig: { type: 'fadeIn', timing: { duration: 1500, staggerDelay: 100 } },
    visibleControls: { basicSettings: true, timingControls: true, advancedOptions: false, specificFields: ['duration', 'staggerDelay'] },
    restrictions: { lockedFields: ['type'], hiddenFields: ['delay'], valueConstraints: { staggerDelay: { min: 50, max: 500 } } },
    previewScript: 'const chars = element.textContent.split(""); element.innerHTML = ""; chars.forEach((char, i) => { const span = document.createElement("span"); span.textContent = char; span.style.opacity = 0; element.appendChild(span); setTimeout(() => span.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 }), i * 100); });'
  },
  custom: {
    id: 'custom',
    name: 'Custom',
    description: 'Full manual control',
    defaultConfig: {},
    visibleControls: { basicSettings: true, timingControls: true, advancedOptions: true, specificFields: [] },
    restrictions: { lockedFields: [], hiddenFields: [], valueConstraints: {} },
    previewScript: ''
  }
};