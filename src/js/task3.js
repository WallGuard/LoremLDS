/* eslint-disable */

function equalString(a, b) {
  if (checkBlock(a, b) !== true) {
    console.log('false');
    return false
  } else {
    console.log(mainFunction2(a, b))
    return mainFunction2(a, b)
  }
}

function checkBlock(a, b) {
  return !((a === '') || (b === '') || (a.length !== b.length) || (a === b))
}

//function mainFunction2(a, b) {
//  a = a.split('');
//  b = b.split('');
//  for (let i = 0, j = 0; i < a.length;) {
//    if (a.every((elem, index) => elem === b[index])) {
//      return true
//    } else if (j > a.length - 1) {
//      i++;
//      j = i;
//    } else if (a[i] === b[j]) {
//      let bj = b[i];
//      b[i] = a[i];
//      b[j] = bj;
//      i++;
//      j = i;
//    } else if (j < a.length - 1) {
//      j += 2;
//    } else {
//      return false
//    }
//  }
//}

function mainFunction3(a, b) {
  let a = a.split('');
  let b = b.split('');

  a.forEach((item, index) => {
    while(a.indexOf(item)) {

    }
  });
}

equalString('eabcd', 'ecdab')
equalString('aaaaababac', 'aaaaabacac')
equalString('abba', 'baab')
equalString('aaabbaab', 'aaabaaab')