import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // Change this from './' to '/'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist', // Ensure this is 'dist' for Netlify
  },
  server: {
    port: 3000,
    open: true,
  },
});