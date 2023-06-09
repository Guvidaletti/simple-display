import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

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
      entry: 'src/index.tsx',
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
});
