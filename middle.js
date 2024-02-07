
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// assertion messages here
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
//array must have numbers in it, if not return response
  if (array.length === 0) {
    return "Please provide valid response";
  }
  // during initial run through code got hard to follow use this variable instead for expressions
  const mid = array.length / 2;
  // if array is odd i can take length and divide by 2 round down and return the middle element
  if (array.length % 2 === 1) {
    return array[Math.floor(mid)];
  }
  // if array is even divide length by 2 minus 1 (starting point) and then plus 1.
  else {
    return [array[mid - 1], array[mid]];
  }
};
assertArraysEqual(middle([]), "Please provide valid response");
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);