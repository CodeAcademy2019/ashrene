const promise =((fulfill, reject) => {
    // Your solution here
    setTimeout(() => reject(new Error('REJECTED!')),300)
  })
  const promiseObject = new Promise(promise);
  promiseObject.then(
      result => null,
      error => onReject
  );

  function onReject (error) {
    // Your solution here
    console.log(error.message)
    //return error.message;
  }
module.exports = {promiseObject,promise}
  // Your solution here