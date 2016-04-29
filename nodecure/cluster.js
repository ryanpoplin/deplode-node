'use strict';

const cluster = require('cluster'),
    numCPUs = require('os').cpus().length;

cluster.setupMaster({
   exec: __dirname + '/node.cure.js'
});

for (let i = 0; i < numCPUs; ++i) {
    cluster.fork();
}

cluster.on('listening', (worker, address) => {
    console.log(
        `A worker is now connected to https://localhost:${address.port}`);
});

cluster.on('disconnect', (worker) => {
    console.log(`${worker.process.pid} disconnected`);
    cluster.fork();
});

cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
});
