// 179. Largest Number
// Given a list of non-negative integers nums, arrange them such that they form the largest number.
// Note: The result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    if(nums.length < 1){
        return '0';
    }
    
    //convert int[] => string[]
    const strNums = nums.map( i => `${i}`);
    
    const res = strNums.sort( (a , b) => {
        let s1 = a + b;
        let s2 = b + a;
        return s1 > s2 ? -1 : 1;
    }).join(''); 
    
    return res[0] !== '0' ? res : '0';
    
    };

console.log( largestNumber( [3,30,34,5,9] ) )
console.log( largestNumber( [0,0] ) )