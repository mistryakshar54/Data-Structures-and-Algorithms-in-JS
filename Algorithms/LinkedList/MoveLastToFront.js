// Move last element to front of a given Linked List
// Write a function that moves the last element to the front in a given Singly Linked List. 
// For example, if the given Linked List is 1->2->3->4->5, then the function should change the list to 5->1->2->3->4.

const SinglyLinkedList = require('../../DataStructures/LinkedList/SinglyLinkedList');
let list1 =  new SinglyLinkedList();
[1,4,5,9,10,11,12,14,17,20,21].forEach( item => list1.push( item ) );

let secondLast = list1.head, last = list1.head.next;
while( last.next.next != null ){
    last = last.next;
}
secondLast = last;
last = last.next;
secondLast.next = null;
last.next = list1.head;
list1.head = last;

list1.traverse();