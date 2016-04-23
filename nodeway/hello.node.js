'use strict';
const http = require('http'),
    url = require('url'),
    qs = require('qs');

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
		'/api/login': (req, res) => {
			let body = '';
			req.on('data', data => {
				// this callback is invoked many times as it is streaming data to it over the network...
				body += data;
				if (body.length > 2097152) {
					res.writeHead(413, {'Content-Type': 'text/html'});
					res.end('<h3>This file being uploaded exceeds the 2MB limit</h3>');
					req.connection.destroy();
				}
			});
			req.on('end', () => {
				let params = qs.parse(body);
				console.log(params['title'], params['done']);
				// db query to check if a user exists...
				res.end();
			});
		}
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