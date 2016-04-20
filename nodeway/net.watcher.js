'use strict'

const net = require('net'),
    fs = require('fs'),
    filename = process.argv[2],
    server = net.createServer((connection) => {

   		console.log('Subscriber connected.')

   		connection.write(`Now watching ${filename} for changes... \n`)

   		let watcher = fs.watch(filename, () => {
   			connection.write(`File ${filename} changed ${Date.now()} \n`)
   		})

   		connection.on('close', () => {
   			console.log('Subscriber disconnected.')
   			watcher.close()
   		})

    })

if (!filename) {
	throw Error('No target filename was specified.')
}

// never send this local ip address to GIT
server.listen(5432, () => {
	console.log('Listening for subscribers...')
})