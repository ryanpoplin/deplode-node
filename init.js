'use strict'

module.exports = (hapi) => {
	const server = new hapi.Server()
	server.connection({
		port: 3000
	})
	return server
}