const attachTitle = (arg) => {
    return( 'DR. '+arg);
}
const promise = (fulfill,reject) => {
    fulfill('MANHATTAN');
}
const promiseObject = new Promise(promise);


const first = promiseObject;
const second = first.then(attachTitle,null);
const third = second.then(console.log)
console.log('third',first)
module.exports = {first,second}