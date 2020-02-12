/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let result = someNum / 2;
   if (Number.isInteger(result)){
       console.log("even")
   }
   else console.log("odd");
  
}

isEven(2)
isEven(3)
isEven(24)
isEven(21)