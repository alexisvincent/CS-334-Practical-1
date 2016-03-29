import chokidar from 'chokidar'
import jspm from 'jspm'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import sass from 'node-sass'

process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.API_PORT = process.env.API_PORT || '3000'

export * from './genHTML'

export const watcher = () => chokidar.watch('.', {
    ignored: ["**/jspm_packages", "**/node_modules", "**/icons"],
    ignoreInitial: true
})

export const builder = new jspm.Builder()

export const renderSCSS = (nodeSassOpts, postcssOpts) => {
    const css = sass.renderSync(nodeSassOpts).css
    return postcss([ autoprefixer({browsers: 'last 8 versions'}) ]).process(css, postcssOpts)
        .then((result) => {
            result.warnings().forEach((warn) => {
                console.warn(warn.toString());
            })
            return result
        })
}
