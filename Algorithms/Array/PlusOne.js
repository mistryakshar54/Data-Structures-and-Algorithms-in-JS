
/**
 * Plus One
 *
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 *
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 * Example 2:
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 */

 const plusOne = (arr) => {
     for (let index = arr.length - 1; index>=0; index--) {
         if( arr[index] === 9 ){
             arr[index] = 0;
         }
         else{
             arr[index] = arr[index] + 1;
             return arr;
         }
     }
     arr.unshift(1);
     return arr;
 }

 console.log(plusOne([4, 3, 2, 1]));
 console.log(plusOne([9,9,9,9]));
 console.log(plusOne([0,9,9,9,9]));