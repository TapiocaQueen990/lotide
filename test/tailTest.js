const tail = require("../tail");
const assertEqual = require("../assertEqual");
const { assert } = require("chai");

const array = tail([1, 2, 3, 4, 5]);
const onlyOne = tail([1]);

// assertEqual(array.length, 4);
// assertEqual(onlyOne.length, 0);
// assertEqual(array[0], 2);

describe("#tail", () => {
  it("should return 4 when given [1, 2, 3, 4, 5]", () => {
    assert.equal((array.length), 4);
  })
});