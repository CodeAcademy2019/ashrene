const promise = ((fulfill, reject) => {
  // Your solution here
  setTimeout(()=>fulfill('FULFILLED!'),300);
})
const promiseObject = new Promise(promise);
promiseObject.then(
  console.log,null);

// Your solution here
module.exports = {promiseObject,promise};