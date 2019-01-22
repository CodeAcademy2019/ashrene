const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
    response.status = 200;
    response.write('Hello world');
    response.end();
});
server.listen(7000);
server.on("connection", () => {
    console.log('Hey');
});
