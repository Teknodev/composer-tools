// src/composer-tools/interaction-engine/text-animations/TextAnimationModal.tsx

import React, { useState } from 'react';
import { TextAnimationState, NavigationLevel } from './types';
import { TextAnimationConfig } from './TextAnimationConfig';
import { EnterEffectConfig } from './EnterEffectConfig';
import { TransitionConfig } from './TransitionConfig';
import { TextAnimationPreview } from './TextAnimationPreview';

interface Props {
  initialState: TextAnimationState;
  onSave: (config: any) => void;
  onClose: () => void;
}

export const TextAnimationModal: React.FC<Props> = ({ initialState, onSave, onClose }) => {
  const [state, setState] = useState<TextAnimationState>(initialState);

  const getMergedConfig = () => {
    // Merge root config with current level overrides
    return { ...state.config, ...state.navigation.currentLevel.config };
  };

  const handleConfigChange = (updates: Partial<any>) => {
    if (state.navigation.currentLevel.id === 'root') {
      setState((prev: TextAnimationState) => ({
        ...prev,
        config: { ...prev.config, ...updates }
      }));
    } else {
      setState((prev: TextAnimationState) => ({
        ...prev,
        navigation: {
          ...prev.navigation,
          currentLevel: {
            ...prev.navigation.currentLevel,
            config: { ...prev.navigation.currentLevel.config, ...updates }
          }
        }
      }));
    }
  };

  const handleNavigate = (levelId: string) => {
    const newLevel: NavigationLevel = {
      id: levelId,
      title: levelId === 'enterEffect' ? 'Enter Effect' : 'Transition',
      config: {},
      breadcrumb: [...state.navigation.currentLevel.breadcrumb, levelId === 'enterEffect' ? 'Enter Effect' : 'Transition']
    };

    setState((prev: TextAnimationState) => ({
      ...prev,
      navigation: {
        stack: [...prev.navigation.stack, prev.navigation.currentLevel],
        currentLevel: newLevel
      }
    }));
  };

  const handleBack = () => {
    if (state.navigation.stack.length > 0) {
      const previousLevel = state.navigation.stack[state.navigation.stack.length - 1];
      setState((prev: TextAnimationState) => ({
        ...prev,
        navigation: {
          stack: prev.navigation.stack.slice(0, -1),
          currentLevel: previousLevel
        }
      }));
    }
  };

  const handlePreviewChange = (preview: Partial<any>) => {
    setState((prev: TextAnimationState) => ({
      ...prev,
      preview: { ...prev.preview, ...preview }
    }));
  };

  const renderCurrentLevel = () => {
    const mergedConfig = getMergedConfig();

    switch (state.navigation.currentLevel.id) {
      case 'root':
        return (
          <TextAnimationConfig
            config={mergedConfig}
            onChange={handleConfigChange}
            onNavigate={handleNavigate}
          />
        );
      case 'enterEffect':
        return (
          <EnterEffectConfig
            enterEffect={mergedConfig.enterEffect || {
              opacity: { value: 1, unit: '', active: true },
              scale: { value: 1, unit: '', active: false },
              blur: { value: 0, unit: 'px', active: false },
              rotate: { value: 0, unit: 'deg', active: false },
              skew: { value: 0, unit: 'deg', active: false },
              offset: { value: 0, unit: 'px', active: false },
            }}
            onChange={(updates) => handleConfigChange({ enterEffect: updates })}
            onNavigate={handleNavigate}
            onBack={handleBack}
          />
        );
      case 'transition':
        return (
          <TransitionConfig
            transition={mergedConfig.transition || {
              type: 'ease',
              ease: { easing: 'ease-in-out', duration: 1000 },
              spring: { stiffness: 100, damping: 0.5, mass: 1 },
              timeline: { duration: 1000, delay: 0, keyframes: [], easeType: 'preset', selectedEase: 'ease-in-out' }
            }}
            onChange={(updates) => handleConfigChange({ transition: updates })}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-animation-modal">
      <div className="modal-header">
        <h2>{state.navigation.currentLevel.title}</h2>
        <button onClick={onClose}>Close</button>
      </div>

      <div className="modal-body">
        <div className="config-panel">
          {renderCurrentLevel()}
        </div>

        <div className="preview-panel">
          <TextAnimationPreview
            config={getMergedConfig()}
            preview={state.preview}
            onPreviewChange={handlePreviewChange}
          />
        </div>
      </div>

      <div className="modal-footer">
        <button onClick={() => onSave(getMergedConfig())}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};