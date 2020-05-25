//Missing number in array
//Given an array C of size N-1 and given that there are numbers from 1 to N with one element missing, the missing number is to be found.

//O(N) with O(1) space

const missingElem = ( A ) => {
    //Assumes that the array is sorted.
    let totalSum = (A[length - 1] * (A[length - 1] + 1))/2; // Formula of sum of N nos i.e. S(n) => N * (N + 1) / 2
    let sum = 0;
    for (let index = 0; index < A.length; index++) {
        sum += A[index];
    }
    return totalSum - sum;
}



//For UnSorted Array:
// Step 1 : Find the max element in the array. 
// Step 2 : Use the Sum of N nos formula i.e. S(n) => N * (N + 1) / 2
// Step 3 : Loop throught the array to find the local sum
// Step 4 : Difference between the sum of arry and toal sum is the answer


//For inplace search without using any variable and a sorted array
// Step 1 : Loop through the array
// Step 2 : Check if the  A[i] + 1 === A[i + 1] 
// Step 3 : If not, then A[i] + 1 is the missing number
