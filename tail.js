const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  if (array.length === 0 || array.length === 1) {
    return [];
  }
  
  const tailArray = array.slice(1);
  return tailArray;
};

const array = tail([1, 2, 3, 4, 5]);
const onlyOne = tail([1]);

assertEqual(array.length, 4);
assertEqual(onlyOne.length, 0);
assertEqual(array[0], 2);


