console.log("AAA");

const myPromise = new Promise(function (resolve, reject) {
  // producing code - kod koji traje
  // resolve("Resolved");
  // reject("Rejected");

  setTimeout(function () {
    resolve("Hi from set timeout");
  }, 2000);
});

// myPromise.then(function(value) {}, function(value) {});
myPromise
  .then(onFulfilled) // consuming code - kod koji će se izvršiti kad producing code vrati rezultat
  .catch(function (value) {
    console.log("on catched " + value);
  });

function onFulfilled(value) {
  console.log("on fulfilled: " + value);
}

function onRejected(value) {
  console.log("on rejected: " + value);
}

console.log("BBB");
