/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {

    for(property in someObj){
        console.log(property)
        console.log(someObj[property])
    }
}

let car = {
    engine: 1,
    wheels: 4
}

objectProperties(car);