const fs = require('fs');

function syncFuntion(callback) {
  return callback();
}

function asyncFunction(callback) {
  fs.readFile('file.txt', callback);
}

syncFuntion(() => {
  console.log(1);
});

asyncFunction(() => {
  console.log(2);
});

syncFuntion(() => {
  console.log(3);
});

asyncFunction(() => {
  console.log(4);
});
