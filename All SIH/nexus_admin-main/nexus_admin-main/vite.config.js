import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // This will prevent switching to another port
    open: true,        // This opens the browser automatically
  },
});
