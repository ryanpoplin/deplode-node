'use strict';
const http = require('http');

function webserver (req, res) {

}

http.createServer(webserver).listen(3000, () => {
    console.log('Webserver running on port 3000...');
});