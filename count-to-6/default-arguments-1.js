let important = (string,len = string.length) => {
    //console.log(len);
    var res = "!".repeat(len);
    //console.log(string.concat(res));
    return string+res;
}
module.exports = important