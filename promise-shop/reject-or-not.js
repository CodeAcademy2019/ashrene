const promise =(fulfill,reject) => {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
}
const promiseObject = new Promise(promise);

let onRejected = (error) => {
    console.log(error.message);
}

promiseObject.then(
    console.log,
    onRejected
    );
module.exports = {promiseObject,promise}
