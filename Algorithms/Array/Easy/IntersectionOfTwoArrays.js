// Intersection of Two Arrays II
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.


// Solution Approach : O(N) Time + O(N) Space
// Store the count of elements in a map
// Loop throught the Array2 and check if the element exists in the map
//   If the element exists add to the result array and reduce the item count by 1 in the map
//   Why? Because to avoid duplicates [4] and [4,4,9] should give [4] and not [4,4]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    const resultArr = [];
    for( item of nums1 ){
        if(map.has(item)){
            let count = map.get( item );
            map.set( item , ++count );
        }
        else{
            map.set( item , 1 );
        }
    }
    for( item of nums2 ){
        if( map.has(item) ){
            let cnt = map.get(item);
            if( cnt > 0 ){
                resultArr.push(item);
                map.set(item , --cnt);
            }
        }
    }
    return resultArr;
};


// Solution Approach2 : O(NLogN) Time + O(1) Space
// Sort both the arrays
// While loop untill any one of them ends
//   If the element in Arr1 is less than Arr2 => j++
//   If the element in Arr1 is greater than Arr2 => i++
//   If the element in Arr1 is same as in Arr2 => add to the result set
