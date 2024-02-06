const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
  // Take the first element of the array 
 const head = function (array) {
 if (array && array.length > 0) {
  return array[0];
 } else {
  return undefined;
 }
 };


 assertEqual(head([5,6,7]), 5);