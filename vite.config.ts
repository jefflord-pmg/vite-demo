import { defineConfig } from 'vite'
import { resolve } from 'path'
import checker from 'vite-plugin-checker'

export default defineConfig({
  appType: 'mpa',
  plugins: [
    checker({ typescript: true })
  ],
  build: {
    rollupOptions: {
      input: {
        'hello-world': resolve(__dirname, 'hello-world.html'),
        'crud-testing': resolve(__dirname, 'crud-testing.html'),
      },
    },
  },
})
