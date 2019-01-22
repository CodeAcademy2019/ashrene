let input = process.argv.slice(2);

//console.log(newInput)

const sum = (inputArray) => {
    let result = inputArray.reduce((acc,currV) => (
        acc += Number(currV)
    ),0)
    console.log(result);
    return result;
}

sum(input);

module.exports = sum;