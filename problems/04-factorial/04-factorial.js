/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(someNum) {
    if(someNum === 0|| someNum===1) return 1;
        else
{
    return someNum*factorial(someNum - 1)
}
  
}

console.log("Factorial(3): ",factorial(3))
console.log("factorial(5): ",factorial(5))