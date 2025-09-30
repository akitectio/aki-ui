// Build configuration for HTMX adapter standalone bundle
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'simple.ts'),
      name: 'AkiUIHTMX',
      fileName: 'aki-ui-htmx',
      formats: ['es', 'umd', 'iife']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    },
    minify: 'esbuild',
    sourcemap: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
});