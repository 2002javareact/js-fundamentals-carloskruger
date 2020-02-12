/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) { 
    let begIndex = 0
    let endIndex = someStr.length - 1
    while(endIndex > begIndex){
        if (someStr[begIndex]!=someStr[endIndex]){
            return false
        }

        begIndex++;
        endIndex--;
    }
    return true;
}

console.log(isPalindrome("car"))
console.log(isPalindrome("ara"))