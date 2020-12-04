// Next Greater Element
// Given an array, print the Next Greater Element (NGE) for every element. 
// The Next greater Element for an element x is the first greater element on the right side of x in array. 
// Elements for which no greater element exist, consider next greater element as -1.

// Example:
// Element       NGE
//    4      -->   5
//    5      -->   25
//    2      -->   25
//    25     -->   -1

// Solution : O(N)
// Steps:
// -> Take an auxilary stack. Push the first element in the stack
// -> Traverse the array. 
//     -> While the current element is > the stack top values, pop the values and mark current one as the NextGreaterElement. 
//     -> Push the current element in the stack
// -> For all the left items in the stack, there was no greater value at the right. So pop them up and print NGE as -1

const Stack = require('../../DataStructures/Stack/StackUsingArray'); //A stack using array

const NextGreaterElement = ( A ) => {
    const tempStack = new Stack(A.length);
    tempStack.push(A[0]);
    for (let index = 1; index < A.length; index++) {
        while (A[index] > tempStack.peek()) {
          let val = tempStack.pop();
          console.log("Next greater element for ", val, "is ", A[index]);
        }
        tempStack.push(A[index]);
    }
    while (!tempStack.isEmpty()) {
        const val = tempStack.pop()
        console.log("Next greater element for ", val, "is -1");
    }
}


NextGreaterElement( [ 4,5,2,25 ] )