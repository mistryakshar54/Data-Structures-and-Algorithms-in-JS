//Iterative approach
const factorialItr = ( number ) => {
    let factVal = 1;
    for (let i = 1; i <= number; i++) {
        factVal *= i; 
    }
    return factVal;
}
console.log("Iterative Factorial of 5 => ", factorialItr(5));
console.log("Iterative Factorial of 10 => ", factorialItr(10));
console.log("Iterative Factorial of 4 => ", factorialItr(4));
console.log("Iterative Factorial of 1 => ", factorialItr(1));


//Recursive approach
const factorial = ( number ) => {
    if ( number <= 1) { return 1}
    return number * factorial(number - 1);
}

console.log("Recursive Factorial of 5 => " , factorial(5));
console.log("Recursive Factorial of 10 => " , factorial(10));
console.log("Recursive Factorial of 4 => " , factorial(4));
console.log("Recursive Factorial of 1 => " , factorial(1));