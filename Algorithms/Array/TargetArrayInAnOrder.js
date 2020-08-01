//LC:1389 Create Target Array in the Given Order
// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.
// Input: (nums = [0, 1, 2, 3, 4]), (index = [0, 1, 2, 2, 1]);
// Output: [0, 4, 1, 3, 2];

var createTargetArray = function(nums, index) {
  let target = [];
  for (let i = 0; i < index.length; i++) {
    if (index[i] === target.length) {
      target.push(nums[i]);
    } else {
      target = [
        ...target.slice(0, index[i]),
        nums[i],
        ...target.slice(index[i]),
      ];
    }
  }
  return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));