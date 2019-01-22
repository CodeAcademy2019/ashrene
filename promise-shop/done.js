const output = [];
alwaysThrows=()=>{
    throw Error('OH NOES');
}
iterate = (arg=1) => {
    console.log(arg);
    output.push(arg);
    return arg+1;
}

const promise = Promise.resolve(iterate())
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(error => {
        output.push(error.message)
        console.log(error.message)

    })

module.exports = {alwaysThrows,iterate,promise,output}