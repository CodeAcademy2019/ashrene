const filePath = process.argv[2];
//console.log(filePath);
const fs = require('fs')

const newlineCount = (filePath) => {
    let obj = fs.readFileSync(`${filePath}`);
    //console.log(obj);
    let string = obj.toString();
    string = string.split('\n');
    let result = string.length - 1;
    console.log(result);
    return result;
}

newlineCount(filePath);

module.exports = newlineCount