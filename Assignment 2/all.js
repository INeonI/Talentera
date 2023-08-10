function all(array, callback) {
  for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
          return false;
      }
  }
  return true;
}

var allAreLessThanSeven = all([1, 2, 9], function(num) {
  return num < 7;
});

console.log(allAreLessThanSeven);
