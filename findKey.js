// Implement the function findKey which takes in an object and a callback.
//  It should scan the object and return the first key for which the callback returns a truthy value.
//   If no key is found, then it should return undefined.


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
 for (let key of Object.keys(object)) {
  if (callback(object[key])) {
    return key;
  }
 }
 return undefined;
};

const results1 = findKey({ 
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }}, x => x.stars === 2); // => "noma"



  console.log(results1);

  assertEqual(findKey({ 
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }}, x => x.stars === 2), "noma");

    const results2 = findKey({
      cat: { letters: 3 },
      fish: { letters: 4 },
      orange: { letters: 6 },
      flower: { letters: 7 },
      castle: { letters: 6 },
      meniscus: { letters: 8 }}, x => x.letters === 6);

      assertEqual(findKey({
        cat: { letters: 3 },
        fish: { letters: 4 },
        orange: { letters: 6 },
        flower: { letters: 7 },
        castle: { letters: 6 },
        meniscus: { letters: 8 }}, x => x.letters === 6), "orange");