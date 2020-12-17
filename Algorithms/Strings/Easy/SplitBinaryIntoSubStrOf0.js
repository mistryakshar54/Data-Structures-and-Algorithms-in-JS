// Split the binary string into substrings with equal number of 0s and 1s

// Given a binary string str of length N, the task is to find the maximum count of substrings str can be divided
// into such that all the substrings are balanced i.e. they have equal number of 0s and 1s. If it is not possible to split str satisfying the conditions then print -1.

// Example:
// Input: str = “0100110101”
// Output: 4
// The required substrings are “01”, “0011”, “01” and “01”.

// Input: str = “0111100010”
// Output: 3

const splitBinStr = ( str ) => {
    let zeroCnt = 0, oneCnt = 0 , totalCount = 0;
    for( let i = 0; i < str.length; i++ ){
        str[i] === '0' ? zeroCnt++ : oneCnt++;
        if(zeroCnt === oneCnt){
            totalCount++;
        }
    }
    return (zeroCnt + oneCnt) !== str.length ? -1 : totalCount;
}

console.log( splitBinStr("0100110101") )
console.log( splitBinStr("0111100010") )