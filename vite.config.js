import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite';
import dsv from '@rollup/plugin-dsv'
export default defineConfig({
  // base: './',
  plugins: [dsv(), sveltekit({})],
  server: { port: 5000 }
})