// src/composer-tools/interaction-engine/text-animations/TextAnimationPreview.tsx

import React, { useEffect, useRef, useMemo } from 'react';
import { TextAnimationConfig, TextPreviewState } from './types';
import { TEXT_ANIMATION_PRESETS } from './presets';

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

  // Generate the iframe preset scripts from the single source of truth (presets.ts).
  // Each preset's previewScript is a string of JS that receives `element` in scope.
  const iframePresetScripts = useMemo(() => {
    const entries = Object.entries(TEXT_ANIMATION_PRESETS)
      .filter(([, p]) => p.previewScript)
      .map(([id, p]) => {
        const escapedScript = p.previewScript.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
        return `${JSON.stringify(id)}: function(element) { ${escapedScript} }`;
      });
    return `{ ${entries.join(',\n                ')} }`;
  }, []);

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
              #preview-text span { display: inline-block; }
            </style>
          </head>
          <body>
            <div id="preview-text">${safeText}</div>
            <script>
              let animation;
              var PRESET_SCRIPTS = ${iframePresetScripts};

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

              function esc(s) {
                return s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
              }

              function applyGranularity(element, config) {
                var text = element.textContent || '';
                var g = config.granularity || 'character';

                if (g === 'character') {
                  element.innerHTML = text.split('').map(function(c) {
                    return '<span>' + esc(c === ' ' ? '\\u00A0' : c) + '</span>';
                  }).join('');
                } else if (g === 'word') {
                  element.innerHTML = text.split(/\\s+/).map(function(w) {
                    return '<span style="margin-right:0.25em">' + esc(w) + '</span>';
                  }).join('');
                } else {
                  // 'element' and 'layer' granularity treat the whole element as one unit
                  element.innerHTML = '<span>' + esc(text) + '</span>';
                }
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