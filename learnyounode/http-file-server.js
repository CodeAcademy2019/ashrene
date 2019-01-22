const http = require('http');
const fs = require('fs');

const location = process.argv[3];
const port = process.argv[2];
let data = '';
const server = http.createServer((request, response) => {
    let read = fs.createReadStream(location);
    //console.log(read);
    read.on("data", (readdata) => {
        data += readdata;
    }).on("end", () => {
        response.write(data);
    });
});


server.listen(port);
