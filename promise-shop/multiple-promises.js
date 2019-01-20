const all = (promise1, promise2) => {
  const promise3 = new Promise((resolve, reject) => {
  let counter = 0;
  const result = [];
  promise1.then((value) => {
      result[0] = value;
      counter++;
      if (counter >= 2) {
        resolve(result);
      }
  });
  promise2.then((value) => {
      result[1] = value;
      counter++;
      if (counter >= 2) {
        resolve(result);
      }
  });
 })
  return promise3;
}

const getPromise1 = () => Promise.resolve('Promise1 resolved');
const getPromise2 = () => Promise.resolve('Promise2 resolved');

all(getPromise1(), getPromise2()).then(console.log, null);


module.exports = { getPromise1, getPromise2, all };
