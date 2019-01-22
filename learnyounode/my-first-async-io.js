const filePath = process.argv[2];
//console.log(filePath);
const fs = require('fs')


/*const newlineCount = (filePath,callback) => {
    
    return fs.readFile(`${filePath}`,read = (err,contents) => {
        callback(contents);
    })
    //console.log(obj);
    //let string = obj.toString();

}*/

const newlineCount = (filePath,callback = () => {
    return fs.readFile(`${filePath}`,read = (err,contents) => {
        count(contents);
    })
})

const count = (string) => {
    string = string.toString();
    string = string.split('\n');
    let result = string.length - 1;
    console.log(result);
    return result;
}
newlineCount(filePath,callback);

module.exports = {newlineCount,count}