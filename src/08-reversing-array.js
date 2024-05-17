// Reversing an array

function reverseArray(array) {
    let returnedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        returnedArray.push(array[i]);
    }
    return returnedArray;
}

function reverseArrayInPlace(inputArray) {
    for (let i = inputArray.length - 2; i >= 0; i--) {
        inputArray.push(inputArray[i]);
        inputArray.splice(i, 1);
    }
    return inputArray;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);

console.log(arrayValue);
// → [5, 4, 3, 2, 1]

