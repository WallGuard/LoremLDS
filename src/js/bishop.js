function bishopSteps(a, b) {
    if ((a.length || b.length) > 2) {
        console.log('неверно введено поле!')
    } else if (a === b) {
        console.log('Введите разные поля!');
    } else if ((a[1] || b[1]) == (0 || 9))  {
        console.log('Неверный!');
    }  else if ((a[0] >= 'a') && (a[0] <= 'h'))  {
        console.log('Неверное поле!');
    } else if ((b[0]) != ('a' || 'b' || 'c' || 'd' || 'e' || 'f' || 'g' || 'h'))  {
        console.log('Неверное поле!!!!');
    } else if ((bStep(a[0]) - bStep(b[0]) === a[1] - b[1]) || ((bStep(a[0]) - bStep(b[0])) === -(a[1] - b[1]))) {
        console.log('Можно ходить!');
    } else {
        console.log('Ходов нет!');
    }
}

bStep = function newNextFunction(c) {
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

bishopSteps('a0', 'b9')