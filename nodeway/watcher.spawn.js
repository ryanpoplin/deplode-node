'use strict';

const fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if (!filename) {
	throw Error('A file to watch must be specified')
}

fs.watch(filename, () => {
	// run the 'ls' program of the OS, spawn will return a child process
	// spawn's stdin, stdout and stderr properties are streams
	let ls = spawn('ls', ['-lh', filename])
	// pipe the ls.stdout stream to the process.stdout stream
	ls.stdout.pipe(process.stdout)
})
console.log(`Now watching ${filename} for changes...`)