
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
       let hasPreceedingZero = false;
         for (let index = A.length - 1; index>=0; index--) {
         if( A[index] === 9 ){
             A[index] = 0;
         }
         else{
             A[index] = A[index] + 1;
             if(A[0] === 0) { 
                 hasPreceedingZero = true;break;
             }else{
                return A;
             }
         }
     }
    if(hasPreceedingZero){
        while( A[j] !== 0 ){A.shift(1);}
        return A;
     }
     A.unshift(1);
     return A;
 }

 console.log(plusOne([4, 3, 2, 1]));
 console.log(plusOne([9,9,9,9]));
 console.log(plusOne([0,9,9,9,9]));
 console.log(plusOne([0,6,0,9,9,9,2]));