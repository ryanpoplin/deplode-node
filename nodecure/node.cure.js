'use strict';

// for 'HTTPS' make sure you only use SHA256...

// require('ssl-root-cas').inject();
// require('ssl-root-cas').addFile('my-cert.crt);

// const https = require('https');

// https.get('https://www.amazon.com/', (res) => {
//     console.log(`Status Code: ${res.statusCode}`);
//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });
// });

// const tls = require('tls'),
//     fs = require('fs');
//
// let options = {
//     key  : fs.readFileSync('private.key'),
//     cert : fs.readFileSync('public.cert')
// };
//
// let server = tls.createServer(options, (res) => {
//     res.write('Hello World...');
//     res.pipe(res);
// }).listen(8000);

// const tls = require('tls'),
//     fs = require('fs');
//
// let options = {
//     key  : fs.readFileSync('private.key'),
//     cert : fs.readFileSync('public.cert')
// };
//
// let client = tls.connect(8000, options, () => {
//     console.log(client.authorized ? 'Authorized' : 'Not authorized');
// });
//
// client.on('data', (data) => {
//     console.log(data.toString());
//     client.end();
// });

// 2048 bit keys at least

// http://www.sitepoint.com/how-to-use-ssltls-with-node-js/

// sudo openssl genrsa -out server.enc.key 2048

// certificate signing request
// sudo openssl req -new -key server.enc.key -out server.csr

// (optional on self-signing certificates)...
// remove password protection from the server.enc.key
// sudo openssl rsa -in server.enc.key -out server.key

// self sign the certificate, but it'll only be good for personal development, not on the web or native devices...
// sudo openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

// note: use NGINX for all SSL requests and Static content...

const app = require('express')(),
    https = require('https'),
    fs = require('fs'),
    options = {
        key  :  fs.readFileSync('server.key'),
        cert :  fs.readFileSync('server.crt')
    };

// https.createServer(options, (req, res) => {
//     res.writeHead(200);
//     res.end('secure, hello world\n');
// }).listen(3000);

app.use((req, res, next) => {
    let aYear = 60 * 60 * 24 * 365;
    res.set('Strict-Transport-Security', `max-age=${aYear};includeSubdomains`);
    next();
});

app.get('/', (req, res) => {
    res.send('Secure...');
});

https.createServer(options, app).listen(3000, () => {
    console.log('Start...');
});
