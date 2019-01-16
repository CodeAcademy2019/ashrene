module.exports = average = (...arr) => {
    // what goes here?
    if(arr.length == 0){
        return 0;
    }
    var sum = arr.reduce((acc,currV)=>acc+currV,0);
    return sum/arr.length;
};