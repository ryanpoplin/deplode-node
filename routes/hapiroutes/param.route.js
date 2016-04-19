'use strict'

module.exports = (server) => {
	server.route({
		method: 'GET',
		path: '/{name}',
		handler: (request, reply) => {
			reply(`Hello, ${encodeURIComponent(request.params.name)}.`)
		}
	})
}