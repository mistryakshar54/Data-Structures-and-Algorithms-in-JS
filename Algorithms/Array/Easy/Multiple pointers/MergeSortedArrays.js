// LC : 88. Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]
// Solution O(n) Approach : Traverse from the back m-1 and n-1, the maximum value goes at the end of the array untill one of the arrays reach index 0.


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1 , j = n - 1;
    let k = nums1.length - 1;
    while( i >= 0 && j >= 0 ){
        if( nums1[i] >= nums2[j]  ){
            nums1[k] = nums1[i];
            k--;
            i--;
        }
        else{
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }
    while( j >= 0 ){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6] , 3));