function foo(){
    var bar;
    function zip(){
        var quux;
    }
}

// foo = () => {
//     var bar;
//     zip = () => {
//         var quux;
//     } 
// }

//module.exports = foo