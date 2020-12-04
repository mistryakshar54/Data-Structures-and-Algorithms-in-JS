//Given a sorted array, find unique value values in an array!
// [1,2,3,3,3,3,4,5,5,6] = unique values ==> 6 
// [1,1,1,1] = unique values ==> 1 

const uniqueValsInArr = ( arr ) => {
    //Create a counter that will track unique values
    let uniqueCounter = 0;
    //Loop throught the array using two pointers i,j
    for (let i = 0 , j = 1; j <= arr.length; i++,j++) {
        //If the value of i and j is unique from each other, increase the counter!
        if( arr[i] !== arr[j] ) {
            uniqueCounter++;
        }
    }
    //return the counter value
    return uniqueCounter;
}

console.log( "Values unique in [1,2,3,3,3,3,4,5,5,6] => ", uniqueValsInArr([1, 2, 3, 3, 3, 3, 4, 5, 5, 6]));
console.log("Values unique in [1,1,1,1] => ", uniqueValsInArr([1, 1, 1, 1]));
console.log("Values unique in [1,1,3,3] => ", uniqueValsInArr([1,1, 3, 3]));
console.log("Values unique in [] => ", uniqueValsInArr([]));
console.log("Values unique in [-2,-1,-1,0,1] => ", uniqueValsInArr([-2,-1,-1,0,1]));