var s = process.argv[2];

var templateString = (str) => {

    if(str){
        var lc = str.toLowerCase();
        return `Hello, ${str}!
    Your name lowercased is "${lc}".`;
    }
}

var result = templateString(s);
console.log(result);

module.exports = templateString
