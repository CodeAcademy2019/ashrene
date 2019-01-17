const promise = (fulfill,rejected) => {
    setTimeout(() => fulfill('FIRST'),300);
}
const firstObject = new Promise(promise);
firstObject.then(console.log,null);
const first = () => {
    return firstObject
}
const second = (val) => {
    return val;
}
const fulfilled = (secretVal) => {
    console.log(secretVal)
}

const firstPromise = first();
secondPromise = firstPromise.then((secretVal)=>second(secretVal))
secondPromise.then((secretVal)=>fulfilled(secretVal))



module.exports = {firstPromise,secondPromise}