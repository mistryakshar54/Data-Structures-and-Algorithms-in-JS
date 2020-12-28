// LC 125. Valid Palindrome
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let st = 0, end = s.length - 1; 
    while( st < end  ){
        if( !isAlphaNumeric(s.charCodeAt(st)) ){
            st++;
            continue;
        }
        if( !isAlphaNumeric(s.charCodeAt(end)) ){
            end--;
            continue;
        }
        if( s[st] !== s[end] ){
            return false;
        }
        st++;
        end--;
    }
    return true;
};

const isAlphaNumeric = ( code ) => (code >= 97 && code <= 122) || (code >= 48 && code <= 57); 

console.log( isPalindrome("A man, a plan, a canal: Panama") );
console.log( isPalindrome("race a car") );
console.log( isPalindrome("0P") );
console.log( isPalindrome("~!12Pp21") );