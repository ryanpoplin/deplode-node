'use strict'

module.exports = (server, good) => {
	server.register({
		register: good,
		options: {
			reporters: [{
				reporter: require('good-console'),
				events: {
					response: '*',
					log: '*'
				}
			}]
		}
	}, (err) => {
		if (err) {
			throw err
		}
		server.start((err) => {
			if (err) {
				throw err
			}
			server.log('info', `Server running at: ${server.info.uri}`)
		})
	})
}