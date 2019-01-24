const http = require('http');

const urls = process.argv.slice(2);
// console.log(urls)
const result = [];
const i = 0;
let counter = 0;

const print = () => {
	result.forEach((element) => {
		console.log(element);
	});
};
const httpString = (url, index) => {
	let data = '';
	http.get(url, (response) => {
		response.on('data', (chunk) => {
			data += chunk;
			return data;
		}).on('end', () => {
			result[index] = data;
			counter++;
			if (counter === 3) {
				print();
			}
			// index++;
		});
	});
};

httpString(process.argv[2], 0);
httpString(process.argv[3], 1);
httpString(process.argv[4], 2);

// const promise = Promise.resolve(
//     httpString(urls[0]), console.log
// ).then(
//     httpString(urls[1]), console.log
// ).then(
//     httpString(urls[2]), console.log
// );
