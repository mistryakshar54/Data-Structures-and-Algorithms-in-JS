// A Program to check if strings are rotations of each other or not

// Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1?
// (eg given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false)

// Approach : Append s1 + s1 into a temp variable and check if s2 is present in s1.
// s1 = ABCD s2 = CABD ; Temp = s1 + s1 i.e. ABCDABCD and s2 is a substring of it.

// Time complexity : O(N)
// Space complexity : O(1)

const checkIfStringsAreRotated = ( s1 , s2 ) => {
    const temp = s1 + s1;
    return temp.includes(s2);
}

console.log(checkIfStringsAreRotated( "ABACD" , "CDABA" ));
console.log(checkIfStringsAreRotated( "ABCD" , "ACBD" ));