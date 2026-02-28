// src/composer-tools/interaction-engine/text-animations/TextAnimationConfig.tsx

import React from 'react';
import { TextAnimationConfig as ConfigType, GranularityType } from './types';
import { TEXT_ANIMATION_PRESETS } from './presets';

interface Props {
  config: ConfigType;
  onChange: (config: Partial<ConfigType>) => void;
  onNavigate: (level: string) => void;
}

export const TextAnimationConfig: React.FC<Props> = ({ config, onChange, onNavigate }) => {
  const handlePresetChange = (preset: string) => {
    const presetData = TEXT_ANIMATION_PRESETS[preset];
    onChange({ preset, ...presetData.defaultConfig });
  };

  const handleGranularityChange = (granularity: GranularityType) => {
    onChange({ granularity });
  };

  return (
    <div className="text-animation-config">
      <h3>Text Animation Configuration</h3>
      
      <div className="section">
        <label>Preset</label>
        <select value={config.preset} onChange={(e) => handlePresetChange(e.target.value)}>
          {Object.values(TEXT_ANIMATION_PRESETS).map(preset => (
            <option key={preset.id} value={preset.id}>{preset.name}</option>
          ))}
        </select>
      </div>

      <div className="section">
        <label>Granularity</label>
        <select value={config.granularity} onChange={(e) => handleGranularityChange(e.target.value as GranularityType)}>
          <option value="character">Per Character</option>
          <option value="word">Per Word</option>
          <option value="layer">Per Layer</option>
          <option value="element">Per Element</option>
        </select>
      </div>

      <button onClick={() => onNavigate('enterEffect')}>Enter Effect</button>
    </div>
  );
};