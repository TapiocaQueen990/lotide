const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

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

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = {size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // should be true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long"};
// eqObjects(shirtObject, longSleeveShirtObject); // should be false
// console.log(eqObjects(shirtObject, longSleeveShirtObject));
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);