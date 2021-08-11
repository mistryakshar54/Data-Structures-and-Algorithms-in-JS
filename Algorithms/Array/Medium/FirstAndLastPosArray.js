// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in ascending order, 
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Input: nums = [], target = 0
// Output: [-1,-1]

//Approach 1 : Easy 
// Loop through the elements with 2 pointers i at start and j at end of array resp.
// The first match of these elements are the starting and ending indexes
// Time complexity : O(N)

//Approach 2 : Medium
// We will modify binary search a little bit and use it twice 
// to find the first and last occurances of the element
// Time complexity : O(logN)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0, h = nums.length - 1;
    let st = -1, end = -1;
  
    while( l <= h ){
      let mid = Math.floor((l + h) / 2);
      
      if( nums[mid] > target ){
        h = mid - 1;
      }
      
      else if( nums[mid] < target ){
        l = mid + 1;
      }
      else{
        st = mid;
        h = mid - 1;
      }
    }
  
    l = 0; h = nums.length-1;
  
    while( l <= h ){
      let mid = Math.floor((l + h) / 2);
      
      if( nums[mid] > target ){
        h = mid - 1;
      }
      
      else if( nums[mid] < target ){
        l = mid + 1;
      }
      else{
        end = mid;
        l = mid + 1;
      }
    }
    return [st,end]
};

console.log(searchRange([5,7,7,8,8,10] , 6)); // [-1, -1]
console.log(searchRange([5,7,7,8,8,10] , 8)); // [3, 4]