function bishopSteps(a, b) {
    if (chessFieldCheck(a, b) !== true) {
        console.log(chessFieldCheck(a, b));
    } else if (((blc(a[0]) - blc(b[0])) === (a[1] - b[1])) || ((blc(a[0]) - blc(b[0])) === -(a[1] - b[1]))) {
        console.log('Можно!');
        return true;
    } else {
        console.log('Нельзя!');
        return false;
    }
}

function chessFieldCheck(a, b) {
    if ((a === '') || (b === '') || (a.length !== 2) || (b.length !== 2) || (a === b)) {
        return false;
    } else if (((a[1].search(/[1-8]/)) === -1) || ((b[1].search(/[1-8]/)) === -1))  {
        return false;
    } else if (((a[0].search(/[a-h]/)) === -1) || ((b[0].search(/[a-h]/)) === -1))  {
        return false;
    } else {
        return true;
    }
}

const blc = function chesLetterConv(c) {
    a = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8
    }
    
    return a[c];
}

bishopSteps('', '')
