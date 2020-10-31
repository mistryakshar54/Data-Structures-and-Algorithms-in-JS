// Check if there are matching parenthesis
const Stack = require('../../DataStructures/Stack/StackUsingArray'); //A stack using array
const str = "(()()";
// const str = "(()())";

const strArr = str.split('');
let  stk = new Stack(strArr.length);

strArr.forEach( item => item === '(' ? stk.push(item) :  stk.pop());

if(stk.isEmpty()){ console.log("Matching Patenthesis")}
else{ console.log("Invalid Parenthesis")}