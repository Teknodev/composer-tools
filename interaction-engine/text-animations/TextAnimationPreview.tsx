// src/composer-tools/interaction-engine/text-animations/TextAnimationPreview.tsx

import React, { useEffect, useRef } from 'react';
import { TextAnimationConfig, TextPreviewState } from './types';

interface Props {
  config: TextAnimationConfig;
  preview: TextPreviewState;
  onPreviewChange: (preview: Partial<TextPreviewState>) => void;
}

export const TextAnimationPreview: React.FC<Props> = ({ config, preview, onPreviewChange }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      // Send config to iframe
      iframeRef.current.contentWindow?.postMessage({
        type: 'UPDATE_CONFIG',
        config,
        preview
      }, '*');
    }
  }, [config, preview]);

  const handlePlay = () => {
    onPreviewChange({ isPlaying: !preview.isPlaying });
  };

  const handleRestart = () => {
    onPreviewChange({ currentTime: 0, isPlaying: true });
  };

  const handleSpeedChange = (speed: number) => {
    onPreviewChange({ speed });
  };

  return (
    <div className="text-animation-preview">
      <div className="preview-controls">
        <button onClick={handlePlay}>
          {preview.isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleRestart}>Restart</button>
        <label>
          Speed:
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={preview.speed}
            onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
          />
          {preview.speed}x
        </label>
      </div>

      <iframe
        ref={iframeRef}
        srcDoc={`
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { margin: 0; font-family: Arial, sans-serif; }
              #preview-text { font-size: 24px; text-align: center; margin-top: 50px; }
            </style>
          </head>
          <body>
            <div id="preview-text">${config.textContent || 'Preview Text'}</div>
            <script>
              let animation;
              window.addEventListener('message', (event) => {
                if (event.data.type === 'UPDATE_CONFIG') {
                  const { config, preview } = event.data;
                  updatePreview(config, preview);
                }
              });

              function updatePreview(config, preview) {
                const element = document.getElementById('preview-text');
                if (!element) return;

                // Cancel existing animation
                if (animation) animation.cancel();

                // Apply granularity
                applyGranularity(element, config);

                // Apply animation based on preset
                const presetScript = getPresetScript(config.preset);
                if (presetScript) {
                  eval(presetScript);
                }

                // Handle playback
                if (preview.isPlaying) {
                  // Start animation
                }
              }

              function applyGranularity(element, config) {
                // Split text based on granularity
                if (config.granularity === 'character') {
                  const chars = element.textContent.split('');
                  element.innerHTML = chars.map(char => \`<span>\${char}</span>\`).join('');
                }
                // Add other granularities...
              }

              function getPresetScript(preset) {
                // Return script based on preset
                const scripts = {
                  blur: 'element.animate([{ filter: "blur(10px)", opacity: 0 }, { filter: "none", opacity: 1 }], { duration: 1000 });',
                  // Add other presets...
                };
                return scripts[preset] || '';
              }
            </script>
          </body>
          </html>
        `}
        width="100%"
        height="300"
        frameBorder="0"
      />
    </div>
  );
};