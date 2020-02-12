/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let reverse = '';
    for (let i = someStr.length - 1; i >= 0 ; i--){
        reverse =  reverse  + someStr[i]
    }
return reverse
   
}

console.log(reverseStr("revature"));