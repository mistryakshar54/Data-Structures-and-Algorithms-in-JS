// Subarray with 0 sum 

// Given an array a[] of N positive and negative numbers. 
// Find if there is a subarray (of size at-least one) with 0 sum.

// Input : [4, 2, -3, 1, 6]
// Op : true

// Input : [4, 2, 0, 1, 6]
// Op : true

// Solution : O(N) time + O(N) Space
//Approach  : take the left side sum of elements and add the entry to map. If same entry is found
            // i) There is a 0
            // ii) There is a subarray which makes the array size 0 else the sum would have been increasing or decresing constantly

const subArrWithSum = ( arr ) => {
    let mp = new Map();
    let sum = 0;
    for( let i = 0;  i < arr.length; i++){
       sum += arr[i];
       if( mp.has( sum ) ){ return true; }
       mp.set( sum , 0 );
    }
    return false;
  }
  console.log( subArrWithSum( [4, 2, -3, 1, 6] ) );