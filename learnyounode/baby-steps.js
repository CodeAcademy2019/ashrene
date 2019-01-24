const input = process.argv.slice(2);

// console.log(newInput)

const sum = (inputArray) => {
    const result = inputArray.reduce((acc, currV) => (
        acc += Number(currV)
    ), 0);
    console.log(result);
    return result;
};

sum(input);

module.exports = sum;
