const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
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


const takeUntil = function(array, callback) {
for (let i = 0; i < array.length; i++) {
   if (callback(array[i])) {
    array.splice(i);
    return array;
   }
}
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["hello", "my", "name", "is", "Daniel"];
const result2 = takeUntil(data2, x => x === "is");
console.log(result2);

const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results3 = takeUntil(data3, x => x > 6);
console.log(results3);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results3, [1, 2, 3, 4, 5, 6]);