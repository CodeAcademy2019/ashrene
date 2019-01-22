const http = require('http');
 const url = require('url');
// const adr = 'http://localhost:7000/hello';
// const q = url.parse(adr, true);

const server = http.createServer((request, response) => { 
   // console.log(request.url) 
    
    response.status = 200;
    if(request.url === '/hello'){
        request.write('Hello');
    }
    else if (request.url === '/world'){
        request.write('World')
    }
    response.end();
});
server.listen(7000);
server.on("connection", () => {
    console.log('Hey');
});
