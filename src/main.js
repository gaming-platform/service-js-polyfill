'use strict';

const express = require('express');
const pkgs = require('./packages');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.disable('x-powered-by');

app.get('/polyfill.min.js', (request, response) => {
    let packages = [];

    if (request.query.hasOwnProperty('packages')) {
        packages = request.query.packages
            .trim()
            .split(',')
            .filter((p) => {
                return p.trim() !== '';
            });
    }

    response.contentType('text/javascript');
    // The document expires in one week.
    response.setHeader('Cache-Control', 'max-age=604800');
    response.end(pkgs.content(packages));
});

app.use((request, response, next) => {
    response.status(404);
    response.contentType('text/plain');
    response.end('Not found.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
