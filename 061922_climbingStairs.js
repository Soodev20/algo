/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  if (n <= 2) return n;
  let storage = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    storage[i] = storage[i-1] + storage[i-2];
  }

  return storage[n];
};
