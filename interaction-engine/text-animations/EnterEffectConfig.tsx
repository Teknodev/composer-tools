// src/composer-tools/interaction-engine/text-animations/EnterEffectConfig.tsx

import React from 'react';
import { EnterEffectProperties, PropertyValue } from './types';

interface Props {
  enterEffect: EnterEffectProperties;
  onChange: (enterEffect: Partial<EnterEffectProperties>) => void;
  onNavigate: (level: string) => void;
  onBack: () => void;
}

export const EnterEffectConfig: React.FC<Props> = ({ enterEffect, onChange, onNavigate, onBack }) => {
  const properties: (keyof EnterEffectProperties)[] = ['opacity', 'scale', 'blur', 'rotate', 'skew', 'offset'];

  const handlePropertyChange = (property: keyof EnterEffectProperties, value: Partial<PropertyValue>) => {
    onChange({
      [property]: { ...enterEffect[property], ...value }
    });
  };

  return (
    <div className="enter-effect-config">
      <header>
        <button onClick={onBack}>Back</button>
        <h3>Enter Effect</h3>
      </header>

      <div className="properties-grid">
        {properties.map(property => (
          <div key={property} className="property-item">
            <label>
              <input
                type="checkbox"
                checked={enterEffect[property].active}
                onChange={(e) => handlePropertyChange(property, { active: e.target.checked })}
              />
              {property.charAt(0).toUpperCase() + property.slice(1)}
            </label>
            {enterEffect[property].active && (
              <input
                type="number"
                value={enterEffect[property].value}
                onChange={(e) => handlePropertyChange(property, { value: parseFloat(e.target.value) })}
                step="0.1"
              />
            )}
          </div>
        ))}
      </div>

      <button onClick={() => onNavigate('transition')}>Transition</button>
    </div>
  );
};