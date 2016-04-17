'use strict';

// // I'm keeping this here for now as a light-weight reference to the functionality of the EventEmitter class
// function Emitter() {
// 	// event container
// 	this.events = {};
// }
// Emitter.prototype.on = function (type, listener) {
// 	this.events[type] = this.events[type] || []; // either the return value of the current state of {[type]}, or []
// 	this.events[type].push(listener); // add functions to be executed to the event array of listeners
// };
// Emitter.prototype.emit = function (type) /*a light example, but ideally, you'd have the ability to pass in a number of different data types to initialize your listeners...*/ {
// 	if (this.events[type]) { // if the property of events exists, 
// 		this.events[type].forEach((listener) => { // invoke all of the functions in the events array
// 			listener();
// 		});
// 	} else {
// 		console.log(`${type} is not a valid type`);
// 	}
// };

// const EventEmitter = require('events').EventEmitter,
//     util = require('util');

// // const Counter = (init) => {
// // 	this.increment = () => {
// // 		init++;
// // 		this.emit('incremented', init);
// // 	}
// // };

// const Counter = function (init) {
// 	this.increment = () => {
// 		init++;
// 		this.emit('incremented', init);
// 	}
// };

// util.inherits(Counter, EventEmitter);

// const counter = new Counter(25);

// const incrementedCallback = (count) => {
// 	console.log('incremented:', count);
// };

// counter.on('incremented', incrementedCallback);

// counter.increment();

// counter.removeListener('incremented', incrementedCallback);

// counter.increment();

const stream = require('stream');

// const regexmatcher = require('regexmatcher')
// console.log(regexmatcher.getMatches(/https?/gi, 'httpSj;ij;ojj;j;oij;oij;oij;ijhttps        http     HTTP HTTPS'))

// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log('...')
// })