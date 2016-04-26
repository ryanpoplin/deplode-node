'use strict';

const http = require('http');

const preferences = [
    { spam: false },
    { spam: true },
    { spam: false },
    { spam: true }
];

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let id = /\/(\d+)/.exec(req.url),
        preference;

    if (id && (preference = preferences[+id[1]])) {
        res.end(JSON.stringify(preference));
    } else {
        res.statusCode = 404;
        res.statusMessage = http.STATUS_CODE[404];
        res.end();
    }
});

server.listen(8081);
console.log('preferences service: port 8081');