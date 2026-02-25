// src/composer-tools/interaction-engine/text-animations/TextAnimationPreview.tsx

import React, { useEffect, useRef, useMemo } from 'react';
import { TextAnimationConfig, TextPreviewState } from './types';

/** Escape HTML entities to prevent XSS in the iframe srcDoc */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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

  const safeText = useMemo(
    () => escapeHtml((config as any).textContent || 'Preview Text'),
    [(config as any).textContent]
  );

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
            <div id="preview-text">${safeText}</div>
            <script>
              let animation;
              const PRESET_SCRIPTS = {
                blur: function(element) {
                  return element.animate(
                    [{ filter: "blur(10px)", opacity: 0 }, { filter: "none", opacity: 1 }],
                    { duration: 1000 }
                  );
                },
                flip: function(element) {
                  return element.animate(
                    [{ transform: "rotateY(180deg)", opacity: 0 }, { transform: "none", opacity: 1 }],
                    { duration: 800 }
                  );
                },
                shake: function(element) {
                  return element.animate(
                    [{ transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "none" }],
                    { duration: 500, iterations: 3 }
                  );
                },
                shoot: function(element) {
                  return element.animate(
                    [{ transform: "translateY(100%)", opacity: 0 }, { transform: "none", opacity: 1 }],
                    { duration: 600 }
                  );
                },
                scale: function(element) {
                  return element.animate(
                    [{ transform: "scale(0.5)", opacity: 0 }, { transform: "none", opacity: 1 }],
                    { duration: 900 }
                  );
                }
              };

              window.addEventListener('message', function(event) {
                if (event.data.type === 'UPDATE_CONFIG') {
                  var config = event.data.config;
                  var preview = event.data.preview;
                  updatePreview(config, preview);
                }
              });

              function updatePreview(config, preview) {
                var element = document.getElementById('preview-text');
                if (!element) return;

                // Cancel existing animation
                if (animation) animation.cancel();

                // Apply granularity
                applyGranularity(element, config);

                // Apply animation based on preset using safe lookup
                var presetFn = PRESET_SCRIPTS[config.preset];
                if (presetFn) {
                  animation = presetFn(element);
                }

                // Handle playback
                if (preview.isPlaying && animation) {
                  animation.play();
                }
              }

              function applyGranularity(element, config) {
                // Split text based on granularity
                if (config.granularity === 'character') {
                  var chars = element.textContent.split('');
                  element.innerHTML = chars.map(function(char) {
                    return '<span>' + char.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
                  }).join('');
                }
                // Add other granularities...
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