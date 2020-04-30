//Check if a given string is a Palindrome
//Log(N) solution

// "ABCCBA" ==> true
// "ABCDCBA" ==> false
// "AEFSSFEA" ==> true

const isPalindrome = ( str ) => {
    if( str.length % 2 !== 0 ) { return false; } //If the string chars are not even it's not a palindrome!!
    const arr = str.split('');
    let isEqual = true;
    for (
        let start = 0, end = arr.length - 1; //Two pointers start and end to cheeck the first and the last value
        start <= end; 
        start++, end --     //Incr start and decrement end always if string match found
        ) {
        if( arr[start] !== arr[end] ){
            isEqual = false;
        }
    }
    return isEqual;
}

console.log("Is ABCCBA a palindorme? ", isPalindrome("ABCCBA"));
console.log("Is ABCDCBA a palindorme? ", isPalindrome("ABCDCBA"));
console.log("Is AEFSSFEA a palindorme? ", isPalindrome("AEFSSFEA"));
console.log("Is AEFSEFEA a palindorme? ", isPalindrome("AEFSEFEA"));
console.log("Is EEFSEFEA a palindorme? ", isPalindrome("EEFSEFEA"));