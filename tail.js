const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};
 

assertEqual(tail([1]),);
assertEqual(tail([1, 2, 2, 3, 4]), [ 2, 2, 3, 4]);
assertEqual(tail([]), []);

