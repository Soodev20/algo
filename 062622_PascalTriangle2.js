/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
  let storage = [1];

  for (i = 0; i <= rowIndex; i++) {
    storage.unshift(1);

    for (j = 1; j < i; j++) {
      storage[j] += storage[j + 1];
    }
  }

  return storage;
};
