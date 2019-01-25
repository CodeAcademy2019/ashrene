const http = require('http');
// const bl = require('bl');

// const url = process.argv[2];

// const callback = (data) => {
//   const stringLength = data.length;
//   console.log(stringLength);
//   console.log(data);
// };

let data = '';
const httpget = (callback) => {
  http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      // console.log(url);
      data += chunk;
      return data;
    }).on('end', () => callback(data));
  });
};


// http.get(url, (response) => {
//     response.pipe(bl((err, data) => {
//         const result = data.toString();
//         console.log(result.length);
//         console.log(result);
//     }));
// });

module.exports = httpget;
