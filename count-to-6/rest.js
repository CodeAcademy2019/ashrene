module.exports = average = (...arr) => {
    // what goes here?
    var sum = arr.reduce((acc,currV)=>acc+currV,0);
    return sum/arr.length;
};