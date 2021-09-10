// The Celebrity Problem 
// Medium Accuracy: 39.46% Submissions: 84587 Points: 4
// A celebrity is a person who is known to all but does not know anyone at a party. If you go to a party of N people, find if there is a celebrity in the party or not.
// A square NxN matrix M[][] is used to represent people at the party such that if an element of row i and column j  is set to 1 it means ith person knows jth person. Here M[i][i] will always be 0.
// Note: Follow 0 based indexing.
 
// Example 1:

// Input:
// N = 3
// M[][] = {{0 1 0},
//          {0 0 0}, 
//          {0 1 0}}
// Output: 1
// Explanation: 0th and 2nd person both
// know 1. Therefore, 1 is the celebrity. 
const Stack = require('../../../DataStructures/Stack/StackUsingArray');

const celebrityProblem = ( N , M ) => {

    // Add all elements in stack
    const stk = new Stack(N);
    for (let i = 0; i < N; i++) {
        stk.push(i);
    }
    //Pop first 2 elements from stacks
    while( stk.size() >= 2 ){
        const i = stk.pop();
        const j = stk.pop();
        if( M[i][j] === 1 ){
            // If M[elem1][elem2] == 1
            // Push elem2 in stack
            stk.push(j);
        }
        else{
            // Push elem1 in stack    
            stk.push(i);
        }
    }
    //Last element is the celebrity
    const celeb = stk.peek();

    //Confirm by running a loop through that row
    for (let i = 0; i < N; i++) {
        // If M[i][celeb] !== 1 || M[celeb][i] !== 0
        // return -1
        if( M[i][celeb] !== 1 || M[celeb][i] !== 0 ){
            return -1
        }
    }
    return celeb;
    
    // Celebrity confirmed
}

console.log( celebrityProblem( 
    3 ,
    [
        [0, 1, 0],
        [0, 0, 0], 
        [0, 1, 0]
    ]) 
)