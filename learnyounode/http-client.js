const http = require('http');

// const url = process.argv[2];
// const callbackF = (data) => {
//   console.log(data);
// };

const httpget = (callback) => {
  http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('data', callback);
    response.on('error', console.log);
    // return data;
  });
};


// httpget(callbackF);

module.exports = httpget;
