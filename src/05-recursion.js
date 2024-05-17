// Recursion

function isEven(nb) {
    let N = nb
    if (nb < 0) {
        if (N == 1) {
            return false;
        } else if (N == 0) {
            return true;
        }
        else {
            N += 2;
            return isEven(N);
        }
    }


    if (N == 1) {
        return false;
    } else if (N == 0) {
        return true;
    }
    else {
        N -= 2;
        return isEven(N);
    }


}
console.log(isEven(-50));
console.log(isEven(-75));

console.log(isEven(50));
console.log(isEven(75));
