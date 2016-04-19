'use strict';

const fs = require('fs'),
    filename = process.argv[2]
    
if (!filename) {
	throw Error('A file to watch must be specified')
}
fs.watch(filename, () => {
	console.log(`File ${filename} was edited`)
})
console.log(`Now watching changes to ${filename}`)