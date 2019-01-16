function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if(!arr.length){
        return {};
    }
    //var head = initial;
    var tail = arr.slice(1);
    head = fn(initial,arr[0],0,tail);
    
    return Object.assign(head,reduce(tail,fn,head));
  }

  module.exports = reduce