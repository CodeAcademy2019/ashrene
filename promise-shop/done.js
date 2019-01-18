alwaysThrows=()=>{
    throw Error('OH NOES');
}
iterate = (arg=1) => {
    console.log(arg);
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
        console.log(error.message)
    })

module.exports = {alwaysThrows,iterate,promise}