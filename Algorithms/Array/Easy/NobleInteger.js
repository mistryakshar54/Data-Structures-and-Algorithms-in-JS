//Nobel Integer

// Given an integer array, find if an integer p exists in the array such that the number of integers greater than p in the array equals to p
// If such an integer is found return 1 else return -1.
//e.g. : For input [3,9,1,6,10] => 3 is a number  where no of integers greater than 3 in the array (6,9,10) equals to 3. 

const nobelInteger = ( A ) => {
    A.sort( (a , b) =>  a - b  );
    console.log(A);
    for (let index = 0; index < A.length; index++) {
        if( index + 1 !== A.length  && A[index] === A[index + 1]){
            continue; //What if there are duplicates?? the next int wont be bigger but equals so false!!
        }
        if (A[index] ===  Math.abs((A.length - 1) - index)   ) { //abc handles edge case for -ve vals
          return 1;
        }
    }
    return -1;
}

console.log(nobelInteger([3,9,1,6,10]));
console.log(nobelInteger([-6, -1, 4]));