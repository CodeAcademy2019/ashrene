module.exports = important = (string,len = string.length) => {
    var res = "!".repeat(len);
    //console.log(string.concat(res));
    return string.concat(res);
}