/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      noEmitOnError: true,
      outputDir: ['dist', 'storybook-static'],
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      name: 'simple-display',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/vitest.setup.ts'],
    exclude: [...configDefaults.exclude, '**/*.stories.tsx', './src/index.ts'],
    coverage: {
      provider: 'v8',
      exclude: [
        ...configDefaults.coverage.exclude,
        '**/*.stories.tsx',
        './src/index.ts',
      ],
    },
  },
});
