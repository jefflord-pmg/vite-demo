import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        'hello-world': resolve(__dirname, 'hello-world.html'),
        'crud-testing': resolve(__dirname, 'crud-testing.html'),
      },
    },
  },
})
