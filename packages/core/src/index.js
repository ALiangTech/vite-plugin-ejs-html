import * as ejs from 'ejs'
export default function ejsHtmlPlugin (data, options = {}) {
    return {
        name: 'html-transform',
        transformIndexHtml(html) {
            let template = ejs.compile(html, options)
            return template(data)
        }
    }
}