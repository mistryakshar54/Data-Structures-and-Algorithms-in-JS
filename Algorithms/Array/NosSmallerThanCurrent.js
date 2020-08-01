// LeetCode 1365
// How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Simple O(NlogN ) Solution:
var smallerNumbersThanCurrent = function(nums) {
  const returnArr = [];
  for (let i = 0; i < nums.length; i++) {
    let st = 0,end = nums.length - 1,smallCnt = 0;
    while (st <= end) {
      if (st === end && nums[end] < nums[i]) {
        smallCnt++;
        break;
      }
      if (nums[st] < nums[i]) {
        smallCnt++;
      }
      if (nums[end] < nums[i]) {
        smallCnt++;
      }
      st++;end--;
    }
    returnArr.push(smallCnt);
  }
  return returnArr;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));