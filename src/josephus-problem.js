// Josephus Problem
function range(nb) {
    let array = []

    for (let i = 1; i <= nb; i++) {
        array.push(i);
    }

    return array;
}

function josephus(nbPrisoners, order) {
    let prisoners = range(nbPrisoners);
    let i = order - 1;
    while (prisoners.length != 1) {

        if (i <= prisoners.length - 1) {
            prisoners.splice(i, 1);
            i += order - 1;
        }
        else {
            i = i - prisoners.length;

        }
    }

    return console.log(prisoners);
}



josephus(5, 3) // return `4`.
josephus(6, 2); // return `5`.
josephus(7, 2); // return `7`.
josephus(8, 2); // return `1`.
