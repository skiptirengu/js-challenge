const assert = require('assert');

/**
 * @param {Array} array 
 */
function solution(array) {
  if (!(array instanceof Array)) throw new Error('invalid data type');
  if (array.length == 0) return 0;

  // do not modify original array
  const coins = array.slice();
  coins.sort((a, b) => a - b);
  let maxValue = 0;

  for (let coin of coins) {
    let nextValue = maxValue + 1;

    if (coin > nextValue) {
      return nextValue;
    }

    maxValue += coin;
  }

  return maxValue + 1;
}


[
  {
    data: [5, 7, 1, 1, 2, 3, 22],
    expected: 20
  },
  {
    data: [1, 1, 1, 1, 1],
    expected: 6
  },
  {
    data: [1, 5, 1, 1, 1, 10, 15, 20, 100],
    expected: 55
  },
  {
    data: [],
    expected: 0
  }
].forEach((testCase) => {
  const actual = solution(testCase.data);
  console.log(JSON.stringify(testCase.data), '->', actual);

  assert.ok(actual === testCase.expected);
});