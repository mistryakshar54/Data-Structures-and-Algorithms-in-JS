/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = -Infinity,
    maxP = 1,
    minP = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      let tmp = maxP;
      maxP = minP;
      minP = tmp;
    }
    maxP = Math.max(minP * nums[i], nums[i]);
    minP = Math.min(minP * nums[i], nums[i]);

    max = Math.max(max, maxP);
  }
  return max;
};
