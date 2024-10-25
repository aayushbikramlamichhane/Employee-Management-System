  // import { defineConfig } from 'vite'
  // import react from '@vitejs/plugin-react'

  // // https://vite.dev/config/
  // export default defineConfig({
    
  //   plugins: [react()],
  // })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import csp from 'vite-plugin-csp';

export default defineConfig({
  plugins: [
    react(),
    csp({
      // CSP Directives
      'default-src': ["'self'"],
      'script-src': [
        "'self'", 
        "'wasm-unsafe-eval'", 
        "'inline-speculation-rules'"
      ],
      'style-src': ["'self'", "'unsafe-inline'"],  // Allows inline styles if needed
      'connect-src': ["'self'"],
      'img-src': ["'self'", "data:"],
      'font-src': ["'self'", "https:"]
    })
  ]
});
