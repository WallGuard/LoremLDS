/* eslint-disable */

function chetNeChet(a, b) {
    if (check(a, b) !== true) {
        console.log(check(a, b));
    }
    else {
    for (let i = 0, j = 0; i < a.length;) {
        if ( a === b ) {
            console.log('yes');
        }
        else if (a[i] === b[j]) {
            [b[i], b[j]] = [b[j], b[i]];
            i++;
            j = i;
        }
        else if ( ((a[i] !== b[j]) && (j === b.length)) || ((a[i] !== b[j]) && (j === b.length - 1)) ) {
            console.log('No-o-o-o-o');
        }
        else if ( a[i] !== b[i]) {
            j=+2;
        }
    }
}
}
    const check = function checkBlock(a, b) {
    if ((a === '') || (b === '') || (a.length !== b.length) || (a === b)) {
        return false;
    } else {
        return true;
    }
}

chetNeChet('abcd', 'dcab')