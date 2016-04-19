'use strict'

// only time sync code is acceptable is in the first phase of a node.js program
const fs = require('fs'),
    path = '/Users/byrdannfox/deplode/target.txt'

// refactor with a promise =)
// async code fortification
fs.access(path, fs.F_OK, (err) => {
    if (!err) {
    	fs.watch(path, () => {
    		fs.exists(path, (exists) => {
    			if (exists) {
    				console.log('target.txt was edited')
    			} else {
    				throw Error('target.txt was deleted')
    			}
    		})
		})
    } else {
    	throw err
    }
    console.log('...')
});