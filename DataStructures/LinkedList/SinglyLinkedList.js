class NodeItem{
    constructor( val ) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null , this.tail = null;
        this.length = 0;
    }
    push( value ){
        if( this.head === null){
            this.head = new NodeItem(value);
            this.tail = this.head;
        }
        else{
            let newNode = new NodeItem( value );
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        
    }
    traverse(){
        if(this.length <= 0) { console.log('Empty List!!'); return; }
        let headPointer = this.head;
        while (headPointer != null) {
            console.log( headPointer.val);
            headPointer = headPointer.next; 
        }
    }
    pop(){
        if(this.head.next === null){ 
            this.head = null;
            this.tail = null;
        }
        else{
            let tempNode = this.head;
            while (tempNode.next != this.tail) {
                tempNode = tempNode.next;
            }
            tempNode.next = null;
            this.tail = tempNode;
        }
        this.length--;
    }
}

let llist = new SinglyLinkedList();
llist.push(1);
llist.push(2);
llist.push(3);
llist.traverse();
llist.pop();
llist.pop();
llist.pop();
llist.traverse();