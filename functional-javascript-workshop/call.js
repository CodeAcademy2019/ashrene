
function duckCount(...obj) { //used spread function to get array of objects to be able to use reduce later on.
    // SOLUTION GOES HERE
    
    var result = obj.reduce((acc,cV) => {
        if(Object.prototype.hasOwnProperty.call(cV,'quack')){
            acc++;
        }
        return acc;
        },0);
    return result;
}

  module.exports = duckCount