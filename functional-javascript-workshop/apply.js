var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    return function(){
        var message = slice.call(arguments).join(" ");
        //console.log(arguments);
        //console.log(message);
        //console.log([{1:1,2:1,3:1}].slice().join(" "));
        console.log(namespace+" "+message);
    }

  }
    module.exports = logger