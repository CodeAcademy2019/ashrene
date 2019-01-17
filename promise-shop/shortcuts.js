const promise1 = Promise.resolve('RESOLVE VALUE');
const promise2 = Promise.reject(new Error('REJECT VALUE'));

//const promiseObject = new Promise(promise2);

promise2.catch((error)=>{
    console.error(error.message)
});

module.exports = promise2