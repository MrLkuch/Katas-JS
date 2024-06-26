/* Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5*/

var min = function (list) {

    let min = list[0];
    for (let i = 1; i < list.length; i++) {
        if (min > list[i]) {
            min = list[i];
        }
    }
    return min;
}

var max = function (list) {
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i];
        }
    }
    return max;
}

// other solution

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// or 

var min = function (list) {
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function (list) {
    list.sort((a, b) => (b - a));
    return list[0];
}