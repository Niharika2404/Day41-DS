var array = [];

for (var i = 0; i <= 10; i++) {
  array.push(Math.floor(100 + Math.random() * 900));
  }
console.log(array);
console.log(Math.max(...array));
console.log(Math.min(...array));
var int = array.map(Number);
var secondLargest = int.sort(function ( a, b ) {
  return b - a;
  })[1];
console.log("second Largest number: " + secondLargest);
var secondSmallest = int.sort(function (a, b) {
  return a - b;
  })[1];
console.log("Second Smallest number: " + secondSmallest);