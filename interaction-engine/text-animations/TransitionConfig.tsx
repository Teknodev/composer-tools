// src/composer-tools/interaction-engine/text-animations/TransitionConfig.tsx

import React from 'react';
import { TransitionConfig as TransitionType } from './types';

interface Props {
  transition: TransitionType;
  onChange: (transition: Partial<TransitionType>) => void;
  onBack: () => void;
}

export const TransitionConfig: React.FC<Props> = ({ transition, onChange, onBack }) => {
  const handleTypeChange = (type: 'ease' | 'spring') => {
    onChange({ type });
  };

  const handleEaseChange = (ease: Partial<TransitionType['ease']>) => {
    onChange({ ease: { ...transition.ease, ...ease } });
  };

  const handleSpringChange = (spring: Partial<TransitionType['spring']>) => {
    onChange({ spring: { ...transition.spring, ...spring } });
  };

  return (
    <div className="transition-config">
      <header>
        <button onClick={onBack}>Back</button>
        <h3>Transition</h3>
      </header>

      <div className="section">
        <label>Transition Type</label>
        <select value={transition.type} onChange={(e) => handleTypeChange(e.target.value as 'ease' | 'spring')}>
          <option value="ease">Ease</option>
          <option value="spring">Spring</option>
        </select>
      </div>

      {transition.type === 'ease' && (
        <div className="ease-controls">
          <div className="section">
            <label>Easing</label>
            <select
              value={transition.ease.easing}
              onChange={(e) => handleEaseChange({ easing: e.target.value as any })}
            >
              <option value="linear">Linear</option>
              <option value="ease-in">Ease In</option>
              <option value="ease-out">Ease Out</option>
              <option value="ease-in-out">Ease In Out</option>
            </select>
          </div>
          <div className="section">
            <label>Duration (ms)</label>
            <input
              type="number"
              value={transition.ease.duration}
              onChange={(e) => handleEaseChange({ duration: parseInt(e.target.value) })}
            />
          </div>
        </div>
      )}

      {transition.type === 'spring' && (
        <div className="spring-controls">
          <div className="section">
            <label>Stiffness</label>
            <input
              type="number"
              value={transition.spring.stiffness}
              onChange={(e) => handleSpringChange({ stiffness: parseFloat(e.target.value) })}
              min="100"
              max="1000"
            />
          </div>
          <div className="section">
            <label>Damping</label>
            <input
              type="number"
              value={transition.spring.damping}
              onChange={(e) => handleSpringChange({ damping: parseFloat(e.target.value) })}
              min="0.1"
              max="1"
              step="0.1"
            />
          </div>
          <div className="section">
            <label>Mass</label>
            <input
              type="number"
              value={transition.spring.mass}
              onChange={(e) => handleSpringChange({ mass: parseFloat(e.target.value) })}
              min="0.5"
              max="2"
              step="0.1"
            />
          </div>
        </div>
      )}

      {/* Timeline and Curve Editor would go here - simplified for now */}
      <div className="timeline-placeholder">
        <p>Timeline and Curve Editor (advanced feature)</p>
      </div>
    </div>
  );
};