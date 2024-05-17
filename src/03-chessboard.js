// Chessboard

function generateChessboard(nb) {
    let result = '';

    for (let i = 1; i <= nb; i++) {
        for (let j = 1; j <= (nb / 2); j++) {

            if (i % 2 == 0) {
                result += ' #';
            } else {
                result += '# ';
            }
        }
        result += '\n';
    }
    return result;

}

console.log(generateChessboard(8));