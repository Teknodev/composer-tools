
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: '/Users/macbookpro/Documents/landing-composer/src/composer-tools/editor-components/.component-studio',
  plugins: [react()],
  server: {
    port: 62186,
    strictPort: true,
    hmr: { overlay: true },
    fs: {
      allow: ['/Users/macbookpro/Documents/landing-composer/src/composer-tools/editor-components']
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  resolve: {
    alias: {
      '@blinkpage/composer-tools': path.resolve('/Users/macbookpro/Documents/landing-composer/src/composer-tools/editor-components', 'node_modules/@blinkpage/composer-tools'),
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
