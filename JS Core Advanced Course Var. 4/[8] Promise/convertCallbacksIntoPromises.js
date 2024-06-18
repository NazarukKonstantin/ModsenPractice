// Напишите функцию, которая конвертирует
// функцию, основанную на callbacks, в
// функцию, основанную на Promises.

function myPromisify(func, moreThanTwoArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...res) {
        if (err) {
          reject(err);
        } else {
          resolve(moreThanTwoArgs ? res : res[0]);
        }
      }
      args.push(callback);
      func.call(this, ...args);
    });
  };
}
