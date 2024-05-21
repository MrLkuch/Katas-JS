/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/

function maps(x) {
    let doubledArray = [];
    for (number in x) {
        doubledArray[number] = x[number] * 2;
    }
    return doubledArray;
}

// other solution

function maps(x) {
    return x.map(n => n * 2);
}