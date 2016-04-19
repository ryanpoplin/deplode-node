'use strict'

const Hapi = require('hapi'),
    Good = require('good')

const server = require('./init')(Hapi)

require('./routes/hapiroutes/index.route')(server)
require('./routes/hapiroutes/param.route')(server)
require('./routes/hapiroutes/hello.route')(server)

require('./boot')(server, Good)