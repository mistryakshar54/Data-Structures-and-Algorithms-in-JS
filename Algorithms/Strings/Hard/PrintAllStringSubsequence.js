// Hard - Backtracking
// For a given string print all the subsequences of a string.

// Input : abc
// Output : a, b, c, ab, bc, ac, abc
// A String is a subsequence of a given String, that is generated by deleting some character of a given string without changing its order.

// Approach : 
// This is a combination problem where we need to pick one element and leave other using backtracking.
// Take an element add to the string
// Print the element and recur
// After the recur pop the last element 

//      |  A   |  B  |  C |
//       B   C    C
//    C

var allSubsequence = ( s , currStr , i ) => {
  
    if( i === s.length ){
      return
    }
    
    if( currStr !== null && currStr.trim() !== "" ){
        console.log( currStr );
    }
    
    for( let counter = i + 1; counter < s.length; counter++ ){
       currStr += s[counter];
       allSubsequence( s , currStr , counter );
       currStr = currStr.substring( 0 , currStr.length - 1 );
    }
}

allSubsequence("ABCD" , "", -1);