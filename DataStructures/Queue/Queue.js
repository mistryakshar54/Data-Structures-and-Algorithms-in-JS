class Queue{
    constructor(size){
        this.front = -1;
        this.rear = -1;
        this.queue = [];
        this.size = size;
    }

    enqueue = ( value ) => {
        if( !this.isFull() ){
            this.queue.push(value);
            this.rear++;
        }
        else{
            console.log("Queue is full");
        }
    }
    
    dequeue = () => {
        if( !this.isEmpty() ){
            this.front++;
            return this.queue.pop();
        }
        console.log("Queue is empty");
        return;
    }

    isEmpty = () => this.rear !== this.size && this.front === this.rear;
    isFull = () => this.rear === this.size;

    traverse = () => {
        for( let i = this.front; i < this.rear; i++  ){
            console.log(this.queue[i] , " ");
        }
    }
}


let q = new Queue(5);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.dequeue();
q.traverse();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();