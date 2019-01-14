var inputs = process.argv.slice(2);

var arrow =(inputs) => {
    //if(inputs){
        var result = inputs.map(x=>x[0])
        //.concat(result).join('')
        //.reduce((acc,currV)=>acc.concat(currV)); - test not working showing TypeError: Reduce of empty array with no initial value
        //soln - pass an initial value for reduce - 2nd argument
        .reduce((acc,currV)=>acc.concat(currV),''); 
        //console.log(`[${inputs}] becomes "${result}"`);  
        return `[${inputs}] becomes "${result}"`
    //}
}
        


console.log(arrow(inputs))
module.exports = arrow