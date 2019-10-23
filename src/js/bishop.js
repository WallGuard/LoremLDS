function bishopSteps(a, b) {
    if ((a === '') || (b === '')) {
        console.log('пустое поле!')
    } else if ((a.length > 2) || (b.length > 2)) {
        console.log('неверно введено поле!')
    } else if (a === b) {
        console.log('Введите разные поля!');
    } else if (((a[1].search(/[1-8]/)) === -1) || ((b[1].search(/[1-8]/)) === -1))  {
        console.log('Неверный!');
    } else if (((a[0].search(/[a-h]/)) === -1) || ((b[0].search(/[a-h]/)) === -1))  {
        console.log('Неверное поле!');
    } else if ((blc(a[0]) - blc(b[0]) === a[1] - b[1]) || ((blc(a[0]) - blc(b[0])) === -(a[1] - b[1]))) {
        console.log('Можно ходить!');
    } else {
        console.log('Ходов нет!');
    }
}

blc = function bishopLetterCheck(c) {
    if (c === 'a') {
        c = 1;
        return c;
    } else if (c === 'b') {
        c = 2;
        return c;
    } else if (c === 'c') {
        c = 3;
        return c;
    } else if (c === 'd') {
        c = 4;
        return c;
    } else if (c === 'e') {
        c = 5;
        return c;
    } else if (c === 'f') {
        c = 6;
        return c;
    } else if (c === 'g') {
        c = 7;
        return c;
    } else {
        c = 8;
        return c;
    }
}

bishopSteps('a1', 'g7')