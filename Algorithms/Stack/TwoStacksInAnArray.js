// Implement two stacks in an array 
// Your task is to implement  2 stacks in one array efficiently.

// Example 1:
// Input:
// push1(2)
// push1(3)
// push2(4)
// pop1()
// pop2()
// pop2()

// Output:
// 3 4 -1
class TwoStacksInArr {
    constructor( size ){
        this.top1 = -1;
        this.top2 = size;
        this.size = size;
        this.arr = new Array( size );
    }

    push1( x ){
        if( this.top1 < this.top2 - 1 ){
            this.top1++;
            this.arr[this.top1] = x;
        }
        else{
            throw new Error('Stack 1 overflow');
        }
    }
    
    push2( x ){
        if( this.top1 < this.top2 - 1 ){
            this.top2--;
            this.arr[this.top2] = x;
        }
        else{
            throw new Error('Stack 2 overflow');
        }
    }
    
    pop1(){
        if( this.top1 >= 0 ){
            this.top1--;
            return this.arr[this.top1 + 1];
        }
        else{
            throw new Error('Stack 1 is empty');
        }
    }
    
    pop2(){
        if( this.top2 < this.size ){
            this.top2++;
            return this.arr[this.top2 - 1];
        }
        else{
            throw new Error('Stack 2 is empty');
        }
    }
}

const twoStacksInArr = new TwoStacksInArr( 5 );
twoStacksInArr.push1(5);
twoStacksInArr.push2(10);
twoStacksInArr.push2(15);
twoStacksInArr.push1(11);
twoStacksInArr.push2(7);
console.log( twoStacksInArr.pop1() );
twoStacksInArr.push2(40);
console.log( twoStacksInArr.pop2() );
console.log( twoStacksInArr.arr )
console.log( twoStacksInArr.pop1() );
console.log( twoStacksInArr.pop1() );
console.log( twoStacksInArr.pop1() );