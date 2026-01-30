import { defineConfig } from 'vite'
import { resolve } from 'path'
import checker from 'vite-plugin-checker'

export default defineConfig({
  appType: 'mpa',
  plugins: [
    checker({ typescript: true })
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: {                
        'style': resolve(__dirname, 'src/style.less'),
        'hello-world/main': resolve(__dirname, 'src/hello-world/main.ts'),
        'crud-testing/main': resolve(__dirname, 'src/crud-testing/main.ts'),
        extra: resolve(__dirname, 'src/hello-world/my-template.html'),        
      }    ,
      output: {
        // [name] = the key from input (hello-world/main)
        // [hash] = content hash for cache busting
        entryFileNames: 'assets/[name]-[hash].js',

        // For chunks (shared code)
        chunkFileNames: 'assets/[name]-[hash].js',

        // If you have CSS extracted
        assetFileNames: 'assets/[name]-[hash].[ext]',
      }  
    },
  },
})
