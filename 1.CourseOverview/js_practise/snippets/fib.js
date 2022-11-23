
// 1. Creating functions - Type 1

function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

// let is used to create variables, you could use "var"
let n = 10;

// Ans: 55
console.log(fib(n));

// --------------------------

// 2. Creating functions - Type 2

// we bind the function to the variable. 
// here we use JS's arrow syntax to create anonymous (nameless)
// function
let fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

// n = 10;
// Ans: 55
console.log(fib(n));


// --------------------------

// 3. Using ternary operator just to Show-off

let fib = (n) => (n <= 1) ? n : fib(n-1) + fib(n-2);

// n = 10;
// Ans: 55
console.log(fib(n));

// --------------------------

// TASK - Can you compare part 2 and 3 and figure out 
// what the ternary operator is doing ?