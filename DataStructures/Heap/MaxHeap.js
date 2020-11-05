class MaxHeap{

    constructor(){
        this.heap = [null];
    }

    maxHeapify = () => {
        let n = this.heap.length - 1;
        let value = this.heap[n];
        while( n > 1 && this.heap[Math.floor(n/2)] < value ){
            this.heap[n] = this.heap[Math.floor(n/2)];
            n = Math.floor(n / 2);
        }
        this.heap[n] = value;
    }

    insert = ( value ) =>{
        this.heap.push(value);
        if( this.heap.length >= 2 ){
            this.maxHeapify();
        }
    }

    display = () => { for( let i = 1; i < this.heap.length; i++ ){ console.log( this.heap[i]); } }
}



let hp = new MaxHeap();
hp.insert(10);
hp.insert(20);
hp.insert(30);
hp.insert(25);
hp.insert(5);
hp.insert(40);
hp.insert(35);
hp.display();