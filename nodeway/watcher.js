'use strict';

const fs = require('fs')
fs.watch('target.txt', () => {
	console.log('target.txt was edited')
})
console.log('watching target.txt for changes')