/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.*/

function check(a, x) {
    let found = a.find((elem) => elem == x);
    console.log(a)
    console.log(found)
    if (found != undefined || found != null) {
        console.log('vrai')
        return true;
    }
    console.log('faux')
    return false;
}