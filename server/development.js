import path from 'path'
import socketio from 'socket.io'

import {
    renderSCSS,
    watcher,
    builder,
} from './utils'


export default function(app, server) {

    builder.bundle('app/app.js - [app/**/*] - react', 'build/dev-bundle.js', {
        minify: false,
        mangle: false,
        sourceMaps: true,
        lowResSourceMaps: false
    }).then(function() {
        console.log('Built - You can now start developing')
    })
    
    app.get('/app.css', (request, response) => {
        response.setHeader("Content-Type", 'text/css');

        const options = {
            file: 'app/app.scss',
            //outputStyle: 'compressed',
            sourceMap: true
        }

        renderSCSS(options).then(function (result) {
            response.end(result.css);
        })
    })
    
    const io = socketio(server)

    watcher().on('all', (event, changePath) => {
        console.log('File ', changePath, ' emitted: ', event)
        let absolutePath = path.join(process.cwd(), changePath)

        if (changePath.endsWith('.scss')) {
            absolutePath = path.join(process.cwd(), 'app.css')
            changePath = 'app.css!'
            console.log(absolutePath)
        }

        clients.forEach((socket) => socket.emit(event, {path: changePath, absolutePath}))
    })

    let clients = [];

    io.on('connect', socket => {
        const index = clients.push(socket)

        socket.on('identification', (name) => {
            console.log('connected client: ', name)
        })

        socket.on('disconnect', () => clients.splice(index - 1, 1))
    })

}
