import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/parcial-3/', // Reemplaza 'proyectoidx2' con el nombre de tu repositorio
  plugins: [react()],
});
