var inputs = process.argv.slice(2);
var findMin = (inputs) => {
    //if(inputs){
        var result = Math.min(...inputs);
        //console.log(`The minimum of [${arr}] is ${result}`)
        return `The minimum of [${inputs}] is ${result}`
    //}
}
console.log(findMin(inputs))
module.exports = findMin