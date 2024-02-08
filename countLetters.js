const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
const letters = {}

for (const char of sentence) {
  if (char === "" ){
    return "not a valid string"
  }
  if (letters[char]) {
    letters[char] += 1;
  } else {
    letters[char] = 1;
  }
}
return letters;
};


const result1 = countLetters("lighthouse", { l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1 });

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 2);
assertEqual(result1["g"], 4);