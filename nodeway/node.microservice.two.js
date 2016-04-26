'use strict';

const http = require('http');

const users = [
    { name: 'User 1' },
    { name: 'User 2' },
    { name: 'User 3' },
    { name: 'User 4' }
];

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let id = /\/(\d+)/.exec(req.url),
        user;

    if (id && (user = users[+id[1]])) {
        res.end(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.statusReason = http.STATUS_CODES[404];
        res.end();
    }
});

server.listen(8080);
console.log('users service: port 8080');