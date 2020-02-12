/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
   
    if (endIndex > someStr.length||startIndex > someStr.length){
        throw new Error( "input was incorrect");
    }
    
    let subStr = '';
    for (let i = startIndex; i < endIndex; i++){
     subStr = subStr + someStr[i];
}
    return subStr;
}

console.log(substring('hello',0, 3))