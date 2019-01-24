const modularFunction = require('./make-it-modular');

const callback = (err, data) => {
	if (err) {
		console.log(err);
	}
	data.forEach((fileName) => {
		console.log(fileName);
	});
};

modularFunction(process.argv[2], process.argv[3], callback);
