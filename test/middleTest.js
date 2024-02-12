const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual");
const { assert } = require("chai");


// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);







describe("#middle", () => {
  it("should give an empty array when only one element is there", () => {
    assert.deepStrictEqual(middle([1]), []);
  })
  it("should return [2, 3] when given [1, 2, 3, 4]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return the middle most element when given an odd numbered array", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
})