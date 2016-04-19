'use strict'

module.exports = (server) => {
	server.route({
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			reply('Hapi on top of Node.js')
		}
	})
}