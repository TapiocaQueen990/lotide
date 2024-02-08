const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
}
};

const eqObjects = function(object1, object2) {
  const firstKeys = Object.keys(object1);
  const secondKeys = Object.keys(object2);

  //compare lengths of arrays
  if (firstKeys.length !== secondKeys.length) {
    return false;
  }
  //
  for (const firstKey of firstKeys) {
    if (!secondKeys.includes(firstKey)) {
      return false;
    }
  
    //check using eqArray
    if (Array.isArray(object1[firstKey]) && Array.isArray(object2[firstKey])) {
      if (!eqArrays(object1[firstKey], object2[firstKey])) {
        return false;
      } else if (object1[firstKey] !== object2[firstKey]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
};

const myObject = { a: '1', b: '2'};
const myObject2 = { a: '1', b: '2'};
assertObjectsEqual(eqObjects(myObject, myObject2), true);

