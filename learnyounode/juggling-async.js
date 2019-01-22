const http = require('http');

const urls = process.argv.slice(2);
//console.log(urls)

const httpString = (url) => {
    let data = '';
    http.get(url, (response) => {
        response.on('data', (chunk) => {
            data += chunk;
            return data;
        }).on('end', () => {
            console.log(data);
        });
    });
};


const promise = Promise.resolve(
    httpString(urls[0]), console.log
).then(
    httpString(urls[1]), console.log
).then(
    httpString(urls[2]), console.log
);
