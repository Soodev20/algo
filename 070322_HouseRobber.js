/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  if (nums.length === 1) return nums[0];

  const storage = [...Array(nums.length)].fill(0);

  storage[0] = nums[0];
  storage[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    storage[i] = Math.max(storage[i - 2] + nums[i], storage[i - 1]);
  }

  return storage[storage.length - 1];
};
