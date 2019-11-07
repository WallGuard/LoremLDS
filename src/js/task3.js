function checkBlock(a, b) {
    if ((a === '') || (b === '')) {
        return ('Пустые строки!');
    }
    else if (a.length !== b.length) {
        return ('Разная длинна строк!');
    }
    else if (a === b) {
        return ('Одинаковые строки!');
    }
    else {
        console.log(mf(a, b))
        return mf(a, b);
    }
}

mf = function mainFunction(a, b) {
    for (let i = 0, j = 50; i < a.length;) {
        if (a === b) {
            console.log('yes');
            return ('yes')
        }
        else if (j > a.length - 1) {
            i++;
            j =i;
        }
        else if (a[i] === b[j]) {
            [b[i], b[j]] = [b[j], b[i]];
            i++;
            j = i;
        }
        else if ( ((a[i] !== b[j]) && (j > a.length - 1)) ) {
            console.log('No-o-o-o-o');
            return ('No')
        }
        else {
            console.log(0)
            return 0
        }
        console.log(b)
    }
}

mf('abcd', 'cbad')