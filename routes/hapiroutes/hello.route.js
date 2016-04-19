'use strict'

module.exports = (server) => {
	server.register(require('inert'), (err) => {
		if (err) {
			throw err
		}
		server.route({
			method: 'GET',
			path: '/hello',
			handler: (request, reply) => {
				reply.file('./public/hello.html')
			}
		})
	})
}