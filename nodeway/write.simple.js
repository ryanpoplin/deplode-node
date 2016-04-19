'use strict'

const fs = require('fs'),
    text = 'Node.js is quite the catch...'

fs.writeFile('../target.txt', text, (err) => {
	if (err) {
		throw err;
	}
	console.log('File saved')
})