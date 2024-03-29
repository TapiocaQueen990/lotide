
const { assert } = require("chai");
const assertEqual = require("../assertEqual");
const head = require("../head");

// assertEqual(head([5,6,7]), 5);

describe("#head", () => {
it("returns 1 for [1, 2, 3]", () => {
  assert.strictEqual(head([1, 2, 3]), 1);
});
it("should return '5' for [5]", () => {
  assert.strictEqual(head([5]), 5);
})
});