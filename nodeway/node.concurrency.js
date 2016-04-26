'use strict';

// 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json'

// function work (n) {
//     let i = 0, j = n * n;
//     while (++i < j) { console.log(i); }
// }
//
// process.nextTick(() => {
//     console.log('first handler');
// });
// process.nextTick(() => {
//    console.log('second handler');
// });
// // this is a prime example of why clustering a cluster of Node.js event loops is required.
// process.nextTick(() => {
//     console.log('hogging the CPU...');
//     work(100);
// });
// process.nextTick(() => {
//     console.log('blocked handler');
// });

// concurrency Node.js example...
// const http = require('http');
//
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     if (req.url === '/hello') {
//         res.end('Hello, welcome to Node.js...');
//     } else if (req.url === '/world') {
//         res.end('World');
//     } else {
//         setTimeout(() => {
//             res.end('Hello World');
//         }, 3000);
//     }
// });
//
// server.listen(8080);
// console.log('listening at http://localhost:8080');

// use streaming techniques to free up the space on the event loop to prevent blocking actions...
// const http = require('http');
// let array = new Array(1000)
//     .fill(null)
//     .map((v, i) => i);
//
// const server = http.createServer((req, res) => {
//    let size = 25,
//        i = 0;
//    function schedule () {
//        process.nextTick(() => {
//            let chunk = array.slice(i, i + size);
//            if (chunk.length) {
//                // setTimeout(() => {
//                    res.write(chunk.toString() + '\n');
//                    i += size;
//                    schedule();
//                // }, 500);
//            } else {
//                res.end();
//            }
//        });
//    }
//    schedule();
// });
//
// server.listen(8080);
// console.log('start server');

const http = require('http');

const server = http.createServer((req, res) => {
    let id = /\/(\d+)/.exec(req.url);
    if (!id) {
        res.end();
        return;
    }

    // users
    let user = new Promise((resolve, reject) => {
       http.get({
           hostname: 'localhost',
           port: 8080,
           path: `${id[0]}`
       }, (res) => {
           res.on('data', (data) => {
              resolve(JSON.parse(data.toString()));
           });
       });
    });

    // preferences
    let preference = new Promise((resolve, reject) => {
       http.get({
           hostname: 'localhost',
           port: 8081,
           path: `${id[0]}`
       }, (res) => {
           res.on('data', (data) => {
              resolve(JSON.parse(data.toString()));
           });
       });
    });

    Promise.all([ user, preference ]).then((results) => {
       let user = results[0],
           preference = results[1];
        res.end(`<p><strong>Name:</strong> ${user.name}</p><p><strong>Spam:</strong> ${preference.spam}</p>`)
    });
});

server.listen(8083);
console.log('main service: port 8083');