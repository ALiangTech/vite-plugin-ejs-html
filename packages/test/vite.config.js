import ejsHtmlPlugin from "core/src/index.js"
import { defineConfig } from 'vite'
export default defineConfig({
    plugins: [ejsHtmlPlugin({ name: 'test' })]
})