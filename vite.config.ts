import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cssFirst } from './vite-plugin-css-first';



export default defineConfig({
  
  base: '/myPortifolio.io/', 
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), cssFirst()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    cssCodeSplit: false, // Bundle all CSS into one file for faster loading
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild', // Faster than terser
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
