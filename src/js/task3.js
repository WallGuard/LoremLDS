function checkBlock(a, b) {
    if ((a === '') || (b === '') || (a.length !== b.length) || (a === b)) {
        return false;
    } else {
        console.log(mf(a, b))
        return mf(a, b);
    }
}

mf = function mainFunction(a, b) {
    for (let i = 0, j = 50; i < a.length;) {
        if (a === b) {
            console.log('yes');
            return true
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
            return false
        }
        else {
            console.log(0)
            return 0
        }
        console.log(b)
    }
}

mf('abcd', 'cbad')

/////////////////////////////////////////////

function validationOfStringConversion(a, b) {
    if (a.length !== b.length) {
      return false;
    }else {
      let res = true;
      a.split('').forEach((item, index) => {
        let firstSt = 0;
        let secondSt = 0;
        let pos = -1;
        while ((pos = a.indexOf(item, pos + 1)) !== -1) {
          if (pos >= 0) {
            firstSt = firstSt + (pos & 1) + 1
          }
        }
        while ((pos = b.indexOf(item, pos + 1)) !== -1) {
          if (pos >= 0) {
            secondSt = secondSt + (pos & 1) + 1
          }
        }
        if (firstSt !== secondSt) {
          res = false
        }
        firstSt = 0;
        secondSt = 0;
      });
      return res;
    }
  }