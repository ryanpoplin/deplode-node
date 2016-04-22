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
				console.log(data);
				body += data;
			});
			req.on('end', () => {
				let params = qs.parse(body);
				console.log(params['title'], params['done']);
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