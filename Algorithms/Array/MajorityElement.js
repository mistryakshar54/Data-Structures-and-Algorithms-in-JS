// 169. Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const mp = new Map();
  for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
    if (mp.has(nums[i])) {
      let cnt = mp.get(nums[i]);
      mp.set(nums[i], ++cnt);
    } else {
      mp.set(nums[i], 1);
    }

    if (i === j) {
      break;
    }

    if (mp.has(nums[j])) {
      let cnt = mp.get(nums[j]);
      mp.set(nums[j], ++cnt);
    } else {
      mp.set(nums[j], 1);
    }
  }

  for ([k, v] of mp) {
    if (v > nums.length / 2) {
      return k;
    }
  }
  return 0;
};


// Approach 2 :  Boyer-Moore Voting Algorithm

var majorityElement = function(nums) {
    let count = 0 , candidate = null;
    nums.forEach( item => {
        if( count === 0  ){
            candidate = item;
        }
        
        count +=  (item === candidate) ? 1 : -1;
    } )
    return candidate;
};