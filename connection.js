/*jshint esversion: 6 */
//Http module
const http = require('http');

const server = http.createServer();

server.on('connection',(socket) => {
    console.log('New connection established');
});

server.listen(3000);
console.log('Listening on Port 3000...');
