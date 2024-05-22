/* This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/

function simpleMultiplication(number) {
    let result = number;
    if (number % 2 == 0) {
        result *= 8;
    }
    else {
        result *= 9;
    }
    return result;
}
