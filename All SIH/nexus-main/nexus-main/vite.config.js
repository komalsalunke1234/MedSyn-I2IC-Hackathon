import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Change if needed
    strictPort: true, // Ensures it does not switch ports
    open: true,  // Automatically opens in browser
  }
});
