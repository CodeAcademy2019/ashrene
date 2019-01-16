module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce(function(acc,curr){
      // console.log('Hi');
      // console.log(fn(curr));
      // console.log('Bye');
      return acc.concat([fn(curr)]);
    },[]);
    
  }