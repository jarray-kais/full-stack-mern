import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test :{
    environment : 'jsdom',// Simulates a browser-like environment for testing React components.
    globals : true ,
    setupFiles: './tests/setup.js',
}

})
