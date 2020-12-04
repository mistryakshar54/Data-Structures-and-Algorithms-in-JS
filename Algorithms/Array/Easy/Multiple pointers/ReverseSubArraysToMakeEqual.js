// LC 1460. Make Two Arrays Equal by Reversing Sub-arrays
// Given two integer arrays of equal length target and arr.
// In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.
// Return True if you can make arr equal to target, or False otherwise.

// Example 1:

// Input: target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
// 3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.

// Solution :
// 1 - Sort the arrays and compare both the values using two pointers.
//   -  Time Complexity O(NlogN) ?  ->  Sorting O(NLogN) + Two pointer comparing elements  O(LogN)
//   -  Space Complexity O(1)

// 2 - Loop through the arrays and add the count in the Map. After that loop throught the map values. If values are not == 2 then there is a diff no
//   -  Time Complexity O(N) ?  ->  Loop throught array and add values to map O(N) + Loop throught the map to check the count O(N);
//   -  Space Complexity O(N) For map


// Approach 1:
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if( target.length !== arr.length) return false;
    target.sort( (a , b) => a - b )
    arr.sort( (a , b) => a - b )
    let i = 0 , j = target.length - 1;
    while( i <= j ){
        if( (target[i] !== arr[i]) ||  (target[j] !== arr[j])){
            return false;
        }
        i++ , j--;
    }
    return true;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));