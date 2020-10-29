//Finding intersecting point in two linked list

// e.g.   [1,2,3,7,8] and [4,5,6 ] and 6 points to 7 in list 1 then 7 is the intersection point

const SinglyLinkedList = require('../../DataStructures/LinkedList/SinglyLinkedList');
const Stack = require('../../DataStructures/Stack/StackUsingArray');

let list1 = new SinglyLinkedList();
let list2 = new SinglyLinkedList();
const listArr1 = [1,2,6,7,8];
const listArr2 = [3,4,5];

listArr1.forEach( item => list1.push(item) );
listArr2.forEach( item => list2.push(item) );

list2.head.next.next.next = list1.head.next.next; //make an intersecting point


let p = list1.head, q = list2.head;
let stack1 = new Stack(listArr1.length);
let stack2 = new Stack(listArr2.length);

while( p!= null ){ stack1.push( p ); p = p.next; }
while( q!= null ){ stack2.push( q ); q = q.next; }

let prevElement;
while( !stack1.isEmpty() ){
    if( stack1.peek().val ===  stack2.peek().val){
        prevElement = stack1.pop();
        stack2.pop();
    }
    else{
        break;
    }
}
if( !prevElement ){ console.log("No intersection point found"); }
else{ console.log("Intersection point: ", prevElement.val);}