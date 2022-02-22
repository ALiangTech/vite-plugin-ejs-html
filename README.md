# vite-plugin-ejs-html
 用来处理vite下index.html文件 用ejs的语法

## install

```bash
    pnpm add vite-plugin-ejs-html
```
## Usage
```
     import { defineConfig } from 'vite';
     import ejsHtml from 'vite-plugin-ejs-html'
     const data = {};
     const ejsOption = {}
     export default defineConfig({
         plugins: [ ejsHtml(data, ejsOpiton)]
     })
```
