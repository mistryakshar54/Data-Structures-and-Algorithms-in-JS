const SinglyLinkedList = require('../../DataStructures/LinkedList/SinglyLinkedList');

let list1 =  new SinglyLinkedList();
let list2 =  new SinglyLinkedList();

[1,4,5,9].forEach( item => list1.push( item ) );
[2,3,6,10,15,30].forEach( item => list2.push( item ) );

console.log( list1.traverse() );
console.log( list2.traverse() );

let f = list1.head;
let s = list2.head;
let t = null , last = null;
if( f.val < s.val ){
    t = f;
    last = f;
    f = f.next;
}
else{
    t = s;
    last = s;
    s = s.next;
}

while( f != null && s != null ){
    if( f.val < s.val ){
        last.next = f;
        last = f;
        f = f.next;
    }
    else{
        last.next = s;
        last = s;
        s = s.next;
    }
    last.next = null;
}

if( f != null ){
    last.next = f;
}
else{
    last.next = s;
}

while( t != null ){
    console.log( t.val + "->");
    t= t.next;
}