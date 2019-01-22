const http = require('http');
const bl = require('bl');

const url = process.argv[2];

// let data = '';

// http.get(url, (response) => {
//     response.on('data', (chunk) => {
//         data += chunk;
//         return data;
//     }).on('end', () => {
//         let stringLength = data.length;
//         console.log(stringLength)
//         console.log(data);
//     });
// });

http.get(url, (response) => {
    response.pipe(bl((err, data) => {
        const result = data.toString();
        console.log(result.length);
        console.log(result);
    }));
});
