/*jshint esversion: 6 */
//Http module
const http = require('http');

const server = http.createServer((req , res) => {

    if(req.url === "/"){
        res.write("hello friends ! chai pi lo");
        res.end();
    }

    if(req.url === "/api/courses"){
        res.write(JSON.stringify( ['1','2','3'] ));
        res.end();
    }

});

server.on('connection',(socket) => {
    console.log('New connection established');
});

server.listen(3000);
console.log('Listening on Port 3000...');
