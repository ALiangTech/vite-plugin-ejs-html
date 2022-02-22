import ejsHtmlPlugin from "core/src/index.js"
// import ejsHtmlPlugin from "../../bin/index.js" // 打包后
import { defineConfig } from 'vite'
export default defineConfig({
    plugins: [ejsHtmlPlugin({ name: 'test' })]
})