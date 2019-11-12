function equalString(a, b) {
  if (checkBlock(a, b) === false) {
    console.log('false');
    return false
  } else {
    console.log(mfn(a, b))
    return mfn(a, b)
  }
}

function checkBlock(a, b) {
  return !((a === '') || (b === '') || (a.length !== b.length) || (a === b))
}

const mfn = function mainFunction2(a, b) {
  a = a.split('');
  b = b.split('');
  for (let i = 0, j = 0; i < a.length;) {
      if (a.every((value, index) => value === b[index])) {
          console.log('yes');
          return true
      } else if (j > a.length - 1) {
          i++;
          j = i;
      } else if (a[i] === b[j]) {
          b[i] = a[i];
          b[j] = a[j];
          i++;
          j = i;
      } else if ((j > b.length - 2) && (j === i))  {
          console.log('No');
          return false
      } else {
          j += 2;
      }
  }
}

equalString('abcdes', 'cdabei')
