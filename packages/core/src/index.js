import ejs from 'ejs/lib/ejs.js'
export default function ejsHtmlPlugin (data, options = {}) {
    return {
        name: 'html-transform',
        transformIndexHtml(html) {
            let template = ejs.compile(html, options)
            return template(data)
        }
    }
}