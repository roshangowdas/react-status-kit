import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';

export default defineConfig({
  plugins: [
    peerDepsExternal(), // Excludes peerDependencies (React) from the bundle
    react() // Adds React support
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'), // The starting point of our library
      name: 'ReactStateKit', // Global variable name for UMD builds
      fileName: (format) => `react-state-kit.${format}.js` // Output filenames
    },
    rollupOptions: {
      // Make sure externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    }
  }
});
