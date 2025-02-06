import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  // define: {
  //   __ML_CLIENT_ID__: process.env.VITE_ML_CLIENT_ID,
  //   __ML_AUTHORITY_URL__:process.env.VITE_ML_AUTHORITY_URL
  // },
  define: {
    __ML_CLIENT_ID__: JSON.stringify(process.env.VITE_ML_CLIENT_ID),
    __ML_AUTHORITY_URL__: JSON.stringify(process.env.VITE_ML_AUTHORITY_URL)
  },
});
