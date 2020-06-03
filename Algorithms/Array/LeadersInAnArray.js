// Leaders in an Array
// Given an array of positive integers. Your task is to find the leaders in the array.
// Note: An element of array is leader if it is greater than or equal to all the elements to its right side. Also, the rightmost element is always a leader. 

// Eg:
// 16 17 4 3 5 2 => 17 5 2
// 1 2 3 4 0 => 4 0

const LeadersInArray = ( A ) => {
    // length -2 as the last one is always a leader
    let max = -1;
    for (let index = A.length -1 ; index > 0; index--) {
        if(  A[index] >= max  ){ console.log( A[index]); max = A[index]; }
    }
}

LeadersInArray([16, 17, 4, 3, 5, 2]);
LeadersInArray([1, 2, 3, 4, 0]);
