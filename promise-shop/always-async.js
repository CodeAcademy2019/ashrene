//const asyncFn = () => {
    const promise = (fulfill,reject) => {
        fulfill('PROMISE VALUE');
    }
    const promiseObject = new Promise(promise);
    let stringObject = {};
    console.log('MAIN PROGRAM');
    //stringObject.first = 'MAIN PROGRAM';
    // const callStringObject = (string) => {
    //         console.log(string);
    //         stringObject.second = string;
    // }
    promiseObject.then(
        //callStringObject,
        console.log,
        null
    );
//    return stringObject;
//}
//asyncFn();
//module.exports = asyncFn
module.exports = {promiseObject,promise}
