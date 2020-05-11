// Find Duplicate in Array

// Given a read only array of n + 1 integers between 1 and n, find one number that repeats in linear time using less than O(n) space and traversing the stream sequentially O(1) times.

// Sample Input:

// [3 4 1 4 1]
// Sample Output:

// 1
// If there are multiple possible answers ( like in the sample case above ), output any one.

// If there is no duplicate, output -1

// TODO: Remove the hacky n
const findDupe = (A) => {
    const dupeObj = {};
    for (let start = 0, end = A.length - 1;
         start <= end ;
         start++ , end--) 
    {
        if( dupeObj[ `n${A[start]}` ] ){
            dupeObj[`n${A[start]}`] += 1; 
        }   
        else{
            dupeObj[`n${A[start]}`] = 1;
        }

        if (dupeObj[`n${A[end]}`]) {
          dupeObj[`n${A[end]}`] += 1;
        } else {
          dupeObj[`n${A[end]}`] = 1;
        }
    }
    for (const key in dupeObj) {
      if (dupeObj[key] > 1) {
        return parseInt(key.replace('n','')); //Hacky way but for some reason 25 is treated as 2 in obj therby increaseing the count for wront no.
      }
    }
    return -1;
}

console.log(
  findDupe([
    31,
    6,
    8,
    12,
    22,
    27,
    1,
    30,
    11,
    28,
    36,
    18,
    17,
    16,
    24,
    10,
    21,
    23,
    2,
    32,
    33,
    3,
    9,
    15,
    13,
    14,
    23,
    4,
    20,
    5,
    34,
    26,
    19,
    7,
    25,
    35,
    29,
    15,
    13,
    14,
    23,
    4,
    20,
    5,
    34,
    26,
    19,
  ])
);