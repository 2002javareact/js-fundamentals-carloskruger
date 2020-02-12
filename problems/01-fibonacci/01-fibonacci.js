/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

//0  1  1  2  3  5  8  13 21 34 
//0  1  2  3  4  5  6  7  8  9  10  11  12  13

total = 0;
numbers = []
for(let i = 0; i <= n; i++){
    if (i === 0 || i === 1) 
       numbers.push(i);
       
    else numbers.push(numbers[i-1] + numbers[i-2])
        
}

return (numbers[numbers.length - 1])

//console.log(numbers)
}

console.log(fib(100))