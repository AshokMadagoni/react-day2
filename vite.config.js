import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-day2/', // Change this to match your GitHub repo name
  plugins: [react()],
});
