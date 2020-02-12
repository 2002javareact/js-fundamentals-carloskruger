/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    notSorted = true;
    while(notSorted){
        notSorted = false
        for(let i = 0; i < numArray.length - 1; i++){
            let temp;
            if (numArray[i + 1] < numArray[i]){
                notSorted = true;
                temp = numArray[i];
                numArray[i] = numArray[i + 1];
                numArray[i + 1] = temp
            }

        }
    }
    return numArray;
}

x = [2, 4, 1, 5, 7, 3];
console.log(bubbleSort(x));