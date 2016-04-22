'use strict';
const http = require('http'),
    url = require('url');

let routes = {
	'GET': {
		'/': (req, res) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<h1>/</h1>');
		},
		'/about': (req, res) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<h1>/about</h1>');
		},
		'/api/getinfo': (req, res) => {
			// db fetch
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(req.queryParams));
		}
	},
	'POST': {

	},
	'NA': (req, res) => {
		res.writeHead(404);
		res.end('Content not found...');
	}
};

function router (req, res) {
	let baseURI = url.parse(req.url, true);
	let resolveRoute = routes[req.method][baseURI.pathname];
	if (resolveRoute) {
		req.queryParams = baseURI.query;
		resolveRoute(req, res);
	} else {
		routes['NA'](req, res);
	}
}

http.createServer(router).listen(3000, () => {
	console.log('Server listening on port 3000');
});