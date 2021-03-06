//Given an array count the number of inversions:
// Inversions determine the total no of elements that are smaller than the prev elements
const countInversions =  ( arr ) => {
    let inverseCnt = 0;
    arr.forEach((element,index) => {
        for(let j = index + 1; j < arr.length; j++){
            if(  arr[j] < element ){
                inverseCnt++;
            }
        } 
    });
    return inverseCnt;
}


console.log(countInversions( [8, 4, 2, 1] ));