import express from 'express'
import http from 'http'
import compression from 'compression'

import {
    genHTML,
} from './utils'

import development from './development'

const app = express()
const server = http.Server(app)

app.use(compression());

if (process.env.NODE_ENV == 'development') development(app, server)

app.use('/', express.static(__dirname + '/..'));

app.get('*', (request, response) => response.end(genHTML(process.env.NODE_ENV)) )

server.listen(3000, err => console.log(err ? err : `Listening at http://localhost:3000`))
