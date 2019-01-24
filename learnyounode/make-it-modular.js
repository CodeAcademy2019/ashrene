const fs = require('fs');

const extensionFn = (pathName, extension, callback) => {
	fs.readdir(pathName, (err, list) => {
		if (err) {
			return callback(err);
		}
		const fileList = list.filter(fileName => fileName.endsWith(`.${extension}`));
		callback(null, fileList);
	});
};

module.exports = extensionFn;
