// 209. Minimum Size Subarray Sum

// Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value.

// Note: There is at least one subarray with sum greater than x

// Examples:
// A[] = {1, 4, 45, 6, 0, 19}
//    x  =  51
// Output: 3
// Minimum length subarray is {4, 45, 6}

// A[] = {1, 10, 5, 2, 7}
//    x  = 9
// Output: 1
// Minimum length subarray is {10}

const minLenSubArrSumEqK = (s, nums) => {
  let st = 0,
    end = 0,
    n = nums.length,
    tCount = nums.length + 1,
    sum = 0;
  while (end < n) {
    while (sum < s && end < n) {
      sum += nums[end];
      end++;
    }
    while (sum > s && st < n) {
      tCount = Math.min(tCount, end - st);
      sum -= nums[st];
      st++;
    }
  }
  return tCount;
};

const minLenSubArrSumEqKOptimized = (s, nums) => {
  let minLen = nums.length + 1;
  let sum = 0,
    left = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index]; //Add to the sum one by one

    while (sum > s) {
      sum -= nums[left]; //Remove elements from front of arr if sum is > s to get min len
      left++;
      minLen = Math.min(minLen, left + 1 - index); // left + 1 because 0 based arr
    }
  }
  return minLen === nums.length + 1 ? 0 : minLen;
};

minLenSubArrSumEqKOptimized(7, [2, 3, 1, 2, 4, 3]);
