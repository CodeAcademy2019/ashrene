const http = require('http');
const map = require('through2-map');

// let data = '';

// const httpServer = http.createServer((request, response) => {
//     if(request.method == 'POST'){
//         request.on('data', (chunk) => {
//             data += chunk;
//             return data;
//         }).on('end', () => {
//             //console.log(data);
//             response.write(data.toUpperCase());
//         });
//     }
//     else{
//         response.write('NOT POST');
//     }
    
// });


const httpServer = http.createServer((request, response) => {
    request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(response);

});

httpServer.listen(process.argv[2]);