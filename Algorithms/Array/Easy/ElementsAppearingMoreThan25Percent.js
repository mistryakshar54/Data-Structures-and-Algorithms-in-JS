

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const maxCounter = Math.floor(arr.length / 4);
    let maxCount = 1;
    for( let i = 0; i < arr.length - 1; i++ ){
        if( arr[i] !== arr[ i + 1] ){
            maxCount = 1; 
        }
        else{
            maxCount++;
            if( maxCount > maxCounter ){ return arr[i]; }    
        }
    }
    return arr[0];
};