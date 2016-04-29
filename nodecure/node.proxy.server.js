'use strict';

const http = require('http'),
    net = require('net'),
    url = require('url'),
    proxy = new http.Server();

proxy.on('connect', (req, clientSocket, head) => {
    let reqData = url.parse(`http://${req.url}`),
        remoteSocket = net.connect(reqData.port, reqData.hostname, () => {
            clientSocket.write('HTTP/1.1 200 \r\n\r\n');
        });
    remoteSocket.write(head);
    remoteSocket.pipe(clientSocket);
    clientSocket.pipe(remoteSocket);
}).listen(4000, () => {
    let request = http.request({
        port: 4000,
        hostname: 'localhost',
        method: 'CONNECT',
        path: 'www.google.com:80'
    });
    request.end();
    request.on('connect', (res, socket, head) => {
        socket.setEncoding('utf8');
        socket.write('GET / HTTP/1.1\r\nHost: www.google.com:80\r\nConnction: close\r\n\r\n');
        socket.on('readable', () => {
            console.log(socket.read());
        });
        socket.on('end', () => {
            proxy.close();
        });
    });
});
