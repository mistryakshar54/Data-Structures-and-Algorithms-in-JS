class Stack{
    constructor( stackLength = 5){
        this.top = -1;
        this.stackArr = [stackLength];
    }

    push = ( value ) => this.stackArr.push(value);
    
    pop = ( ) => this.stackArr.pop();

    traverse = () => {
        console.log("\n***");
        this.stackArr.forEach( item => console.log(item) );
        console.log("***\n");
    }
}

const stack = new Stack();
stack.push(4);
stack.push(3);
stack.push(0);
stack.traverse();
stack.pop();
stack.push(9);
stack.pop();
stack.traverse();