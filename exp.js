const http = require(req, res)

const express = require('express');
const app =express();

const heroesJson = require('./heroes.json')

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		// Home
		case '/':
            res.end('Home');
            
        }
    }).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));