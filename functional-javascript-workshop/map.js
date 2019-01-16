function doubleAll(numbers){
    var result = numbers.map(function(currV){
        return currV*2;
    });
    return result;
}
/*function doubleAll(numbers){
    var map = numbers.map(x=>x*2);
    return map;
}
*/
module.exports = doubleAll