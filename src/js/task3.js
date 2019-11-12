function equalString (a, b) {
  if (checkBlock(a, b) === false) {
    console.log('false');
    return false
  } else {
    console.log(mainFunction(a, b))
    return mainFunction(a, b);
  }
}

function checkBlock(a, b) {
  if ((a === '') || (b === '') || (a.length !== b.length) || (a === b)) {
      return false;
  } else {
      return true;
  }
}

function mainFunction(a, b) {
  let result = true;
  a.split('').forEach((item, index) => {
    let str_1 = 0;
    let str_2 = 0;
    let pos = -1;

  while ((pos = a.indexOf(item, pos + 1)) !== -1) {
    if (pos >= 0) {
      str_1 += (pos & 1) + 1
      }
    }
  while ((pos = b.indexOf(item, pos + 1)) !== -1) {
    if (pos >= 0) {
      str_2 += (pos & 1) + 1
      }
    }
  if (str_1 !== str_2) {
      result = false
    }
    str_1 = 0;
    str_2 = 0;
    });

    return result;
  }

equalString('abch', 'cbad')
