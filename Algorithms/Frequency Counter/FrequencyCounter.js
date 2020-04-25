//O(N*2) solution
//Have two arrays [1,2,3] [4,1,9] check whether arr1 has all the elements squared in arr2 with just1 freqeuncy

const sameCheck = ( arr1 , arr2 ) => {
    let occurance = true;
    //Ensure both the arrays have same
    if( arr1.length !== arr2.length ) return false;
    //Loop through array 1
    arr1.forEach(element => {
        //If the square of an element doesn't exist, then return false!!
        if(!arr2.includes( element ** 2 ) ){
            occurance = false;
        }
    });
    return occurance;
    
}   

 console.log( "For [1, 2, 3] and [4, 1, 9] => ", sameCheck([1, 2, 3], [4, 1, 9])); 
 console.log( "For [1, 2, 3 , 5] and [4, 1, 9, 4] => ", sameCheck([1, 2, 3 , 5], [4, 1, 9, 4])); 
 console.log( "For [1, 2, 3] and [1, 4] => ", sameCheck([1, 2, 3], [4, 1, 9])); 
 console.log( "For [1, 2, 3, 2] and [1, 4 , 9 , 4] => ", sameCheck([1, 2, 3, 2], [4, 1, 9, 4])); 
 

 //O(N) solution

 const sameCheck2 = ( arr1 , arr2 ) => {
     let mapObj = {};
     let same = true;
     if(arr1.length !== arr2.length) return false;
     arr1.forEach( element => {
         let squared = element ** 2;
         if (mapObj[squared] !== undefined && mapObj[squared] >= 1){ mapObj[squared] = mapObj[squared] + 1; }
         else {mapObj[element ** 2] = 1};
     }); 
     
     arr2.forEach( element => {
        if (mapObj[element] !== undefined) {
            mapObj[element] = mapObj[element] - 1;
        }
     });
     for( let elem in mapObj ){
         if(mapObj[elem] > 0) { same = false; break; }
     }
     return same;
 }
 console.log("*******Same check 2***************");
 console.log( "For [1, 2, 3] and [4, 1, 9] => ", sameCheck2([1, 2, 3], [4, 1, 9])); 
 console.log( "For [1, 2, 3 , 5] and [4, 1, 9, 4] => ", sameCheck2([1, 2, 3 , 5], [4, 1, 9, 4])); 
 console.log( "For [1, 2, 3] and [1, 4] => ", sameCheck2([1, 2, 3], [4, 1, 9])); 
 console.log( "For [1, 2, 3, 2] and [1, 4 , 9 , 4] => ", sameCheck2([1, 2, 3, 2], [4, 1, 9, 4])); 
 