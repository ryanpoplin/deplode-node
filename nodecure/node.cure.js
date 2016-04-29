'use strict';

const app = require('express')(),
    cluster = require('cluster'),
    https = require('https'),
    morgan = require('morgan'),
    fs = require('fs'),
    PORT = process.env.PORT || 8080,
    options = {
        key  :  fs.readFileSync('server-key.pem'),
        cert :  fs.readFileSync('server-cert.pem')
    };

// TODO: research more about Strict-Transport-Security.
app.use((req, res, next) => {
    let aYear = 60 * 60 * 24 * 365;
    res.set('Strict-Transport-Security', `max-age=${aYear};includeSubdomains`);
    next();
});

// TODO: research morgan logger and decide what we want to be logging for development, testing and production builds.
// TODO: research how to best timestamp, privatize and organize the storage of log files (they should be securely stored on separate machines).
// TODO: make sure you understand where an error could possibly happen at any time in the code and handle it.
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Secure...');
});

const server = https.createServer(options, app).listen(PORT, () => {
    console.log('Start...');
    process.on('uncaughtException', (err) => {
        console.error(err);
        server.close();
        cluster.worker.disconnect();
    });
});
