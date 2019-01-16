function repeat(operation,num){
    if(num<=0){
        return true;
    }
    operation();
    return repeat(operation,num-1);
}
/*function repeat(operation, num){

    for(var i = 0; i< num ; i++){
        operation();
    }
}
*/

module.exports = repeat