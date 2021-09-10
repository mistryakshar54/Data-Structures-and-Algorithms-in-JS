// Valid Substring 
// Easy Accuracy: 48.25% Submissions: 26185 Points: 2
// Given a string S consisting only of opening and closing parenthesis 'ie '('  and ')', find out the length of the longest valid(well-formed) parentheses substring.
// NOTE: Length of smallest the valid substring ( ) is 2.

// Example 1:

// Input: S = "(()("
// Output: 2
// Explanation: The longest valid 
// substring is "()". Length = 2.



const ValidSubStrLen = ( s ) => {
    const stk = []; //Considering array as stack here
    let vsLen = 0;
    for (let i = 0; i < s.length; i++) {
        if( s[i] === '(' )
        {
            stk.push( s[i] ); //Add to stack
        }
        else{
            // s[i] is ')' and we have to check if the last ( top ) elem in stk is a '('
            if( stk.length > 0 && stk[stk.length - 1] === '('){
                vsLen+=2;
                stk.pop();
            }
        }
    }
    return vsLen;
}

console.log(ValidSubStrLen('(()(')) // 2
console.log(ValidSubStrLen('()(())')) // 6