// Add 1 to a number represented as linked list 
// A number N is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

// Example 1:

// Input:
// LinkedList: 4->5->6
// Output: 457 
// Example 2:

// Input:
// LinkedList: 1->2->3
// Output: 124 
const SinglyLinkedList = require('../../DataStructures/LinkedList/SinglyLinkedList');

const AddOne = ( listData ) => {
    
    let lList =  new SinglyLinkedList();
    let hasCarry = false;
    listData.forEach( item => lList.push( item ) );
    
    lList.reverseList()

    let currItem = lList.head;
    while( currItem != null ){
        if( currItem.val < 9 ){
            currItem.val += 1;
            hasCarry = false;
            break;
        }
        currItem.val = 0;
        hasCarry = true;
        currItem = currItem.next;
    }
    if(hasCarry){
        lList.push(1);
    }
    lList.reverseList();
    lList.traverse();

}

AddOne( [ 0,9,9 ] )
AddOne( [ 1,2,3 ] )