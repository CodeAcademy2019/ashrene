const http = require('http');

const url = process.argv[2];

const httpget = (url) => {
    http.get(url, (response) => {
        response.setEncoding('utf8').on('data', (data) => {
            console.log(data);
            // return data;
        });
    });
};

httpget(url);

module.exports = httpget;
