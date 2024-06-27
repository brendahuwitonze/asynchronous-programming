
const promise = new Promise((resolve, reject) => {
    console.log('Promise created');
    resolve('First resolve');
  });
  
  promise
    .then((result) => {
      console.log(result);
      return 'Second resolve';
    })
    .then((result) => {
      console.log(result);
      throw new Error('Error in chain');
    })
    .catch((error) => {
      console.error('Caught:', error.message);
    })
    .then(() => {
      console.log('After catch');
    });
  
//snippet 2
async function asyncFunction() {
    console.log('Inside async function');
    return 'Async Function Result';
  }
  
  console.log('Start');
  
  asyncFunction().then((result) => {
    console.log(result);
  });
  
  console.log('End');
  
  //snippet 3
  Promise.resolve('Outer Promise')
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      console.log('Inner Promise created');
      resolve('Inner Promise');
    });
  })
  .then((result) => {
    console.log(result);
  });

  //snippet 3

console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});


//snippet
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise 2');
      }, 0);
    });
  })
  .then((result) => {
    console.log(result);
  });

console.log('End');