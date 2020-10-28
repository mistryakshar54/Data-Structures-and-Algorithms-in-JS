const SinglyLinkedList = require('../../DataStructures/LinkedList/SinglyLinkedList');
let list1 =  new SinglyLinkedList();
[1,4,5,9,10,11,12,14,17,20,21].forEach( item => list1.push( item ) );
list1.tail.next = list1.head.next.next;

let fast = list1.head, slow = list1.head;

while( fast.next != null ){
    fast = fast.next.next;
    slow = slow.next;
    if( fast === slow ){
        console.log("Loop detected!");
        return;
    }
}
console.log("No Loop detected!");