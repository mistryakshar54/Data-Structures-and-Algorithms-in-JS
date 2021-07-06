//LC  1464. Maximum Product of Two Elements in an Array
// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 
// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

//Solution O(N)
//Loop through the Array to find the Maximum and Second Maximum element in the array and return the product of max-1 and max2-1

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let max2 = nums[1];
    for( let  i = 2; i < nums.length; i++ ){
        if( nums[i] >= max  ){ max2 = Math.max( max , max2 ); max = nums[i]; }
        else{
            if( nums[i] >= max2  ){ max2 = nums[i];  }
        }
    }
    return (max - 1) * (max2 - 1);
};

console.log(maxProduct([1, 5, 4, 5])); //OP => 16
console.log(maxProduct([3, 7])); //OP => 12