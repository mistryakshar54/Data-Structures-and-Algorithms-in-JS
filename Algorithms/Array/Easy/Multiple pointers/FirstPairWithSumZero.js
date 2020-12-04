//Given a sorted array of intergers, find the first pair with sum equals to 0
//O(LogN) solution + O(1) space

// Solution Approach : Have two pointers , one from start and another from end and check if sum is 0. If sum is > 0 
// the right one descrements else the left most increments 

export const firstPairWithSumZero = (arr) => {
    //define two pointers start (starting from start) and end(starting from the end).
    let start = 0 , end = arr.length - 1;
    while(start < end)
    {
    let diff = arr[end] + arr[start];
    //If difference is 0 we found the pair
      if( diff === 0 ){
        return [ arr[start] , arr[end] ];
      }
    //If the difference is more than 1 the largest number is not gonna cut it (sorted array) 
    //So end--
      else if (diff > 0 ){
        end--;
      }
      else{
    //Difference is -ve so next one please
        start++;
      }
    }
    //No such pair found return []
    return [];
}

console.log(firstPairWithSumZero([-3,2,1,3]));
console.log(firstPairWithSumZero([-2, 0 , 1, 2, 3, 4]));
console.log(firstPairWithSumZero([-3, 1, 2, 3, 4]));
console.log(firstPairWithSumZero([-1, 1, 2, 3, 4]));
console.log(firstPairWithSumZero([1, 1, 2, 3, 4]));