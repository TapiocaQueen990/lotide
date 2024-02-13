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

const flatten = function(array){
  let flattened = [];
  
  for(let element of array){
    if(Array.isArray(element)){
      for(let item of element){
        flattened.push(item);
      }
    }else{
      flattened.push(element);
    }
  }

  return flattened;
};

module.exports = flatten;
