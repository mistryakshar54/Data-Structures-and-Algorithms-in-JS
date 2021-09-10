class Stack{
    constructor( stackLength = 5){
        this.top = -1;
        this.stackArr = Array(stackLength).fill(0);
    }

    push = ( value ) => {
        this.top++;
        this.stackArr[this.top] = value;
    }
    
    size = () => this.stackArr.length;
    
    peek = () => this.stackArr[this.top];

    isEmpty = () => this.top === -1 ? true : false
    
    isFull = () => this.top === this.stackArr.length ? true : false

    pop = ( ) => {
        const poppedItem = this.stackArr[this.top];
        this.top--;
        return poppedItem;
    };

    traverse = () => {
        console.log("\n***");
        this.stackArr.forEach( item => console.log(item) );
        console.log("***\n");
    }
}

module.exports = Stack;
