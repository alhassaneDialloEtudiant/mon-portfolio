import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mon-portfolio/', // ← Le nom exact de ton dépôt
  plugins: [react()],
  build: {
    outDir: 'dist', // par défaut, mais je le précise
  },
  server: {
    historyApiFallback: true, // 👈 ajoute cette ligne pour corriger l'erreur 404 en local aussi
  },
});
