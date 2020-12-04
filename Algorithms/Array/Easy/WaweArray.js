// Given an array of integers, sort the array into a wave like array and return it,
// In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....

// Example
// Given [1, 2, 3, 4]
// One possible answer : [2, 1, 4, 3]
// Another possible answer : [4, 1, 3, 2]
// NOTE : If there are multiple answers possible, return the one thats lexicographically smallest.
// So, in example case, you will return [2, 1, 4, 3]

//Solution approach: 
// We are concerned with lexicographically smallest. If we sort the array and reverse it pairwise it gets the job done.
//  No need to find another possible solution!!

const waweArr = ( A ) => {

    let arr = A.sort((a, b) => a - b);
    for(i = 0; i + 1 < arr.length; i+=2){
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

console.log(waweArr([1,2,3,4]));