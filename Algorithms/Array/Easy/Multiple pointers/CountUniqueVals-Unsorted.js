//Given an UNSORTED array, find unique value values in an array!
// [1,2,-1,0,2,3] = unique values ==> 6
// [1,1,1,1] = unique values ==> 1
// [1,2,1,2,1] = unique values ==> 3
//O(Log(n)) Sol
const uniqueValsInArr = (arr) => {
  //Create an obj that will track unique values
  let counterObj = {};

  //Loop through the array using two pointers i,j
  for (let i = 0, j = arr.length - 1 ; j > 0 && i < j; i++, j--) {
  
    //If there is no value logged in counterObj log it to get unique keys,
    if( !counterObj[arr[i]] ){
        counterObj[arr[i]] = '';
    }
     if (!counterObj[arr[j]]) {
       counterObj[arr[j]] = "";
     }
  }
  //return the total keys which are unique
  return Object.keys(counterObj).length;
};


console.log("Values unique in [1, 2, 1, 2] => ", uniqueValsInArr([1, 2, 1, 2]));
console.log("Values unique in [1,2,-1,0,2,3] => ", uniqueValsInArr([1,2,-1,0,2,3]));
console.log("Values unique in [1,2,1,2,1] => ", uniqueValsInArr([1,2,1,2,1]));
