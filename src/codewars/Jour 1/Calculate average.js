/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/

function findAverage(array) {

    if (array.length > 0) {
        let avg = 0;
        for (number in array) {
            avg += array[number];
        }
        avg /= array.length;
        return avg;
    }

    return 0;
}