/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

//return the same array without the element located at that index 

function spliceElement(someArr, index) {
    let newArr = []
    for(let i = 0;i < someArr.length; i++){
        if(i!=index)
            newArr.push(someArr[i])
    }
    // Emptying the array!!!
    someArr.length = 0
    
    for (let j = 0; j < newArr.length; j++){
        someArr.push(newArr[j])
    }
    return someArr
}

myArray = [3,4,5,6,7]
console.log(spliceElement(myArray,3))

