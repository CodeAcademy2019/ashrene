const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const object = url.parse(request.url, true);
    // console.log(object);
    let result = {};
    if ((object.pathname === '/api/parsetime') && (object.query.iso)) {
        const d = new Date(object.query.iso);
        console.log(object.query.iso);
        result = {
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds(),
        };
        response.write(JSON.stringify(result));
    }
    if ((object.pathname === '/api/unixtime') && (object.query.iso)) {
        const unixtime = new Date(object.query.iso);
        result = {
            unixtime: unixtime.getTime(),
        };
        response.write(JSON.stringify(result));
    }
    response.end();
});

server.listen(process.argv[2]);
