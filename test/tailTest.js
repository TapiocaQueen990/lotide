const tail = require("../tail");
const assertEqual = require("../assertEqual");

const array = tail([1, 2, 3, 4, 5]);
const onlyOne = tail([1]);

assertEqual(array.length, 4);
assertEqual(onlyOne.length, 0);
assertEqual(array[0], 2);
