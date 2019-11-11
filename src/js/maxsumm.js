function maxSummArray(arr) {
    let maxSumm
    let sum
    if ((Number.isInteger(arr[0])) && (Number.isInteger(arr[1]))) {
        maxSumm = arr[0] + arr[1];
        sum = arr[0] + arr[1];
    } else {
        console.log('false')
        return false
    }

    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] ^ 0) !== arr[i]){
            console.log('false');
            return false;
        } else if (maxSumm < sum + arr[i]) {
            maxSumm = sum + arr[i];
            sum = sum + arr[i];
        } else {
            sum = sum + arr[i];
        }
    }
    console.log(maxSumm);
    return maxSumm;
}

maxSummArray([5, 5, 5, 5, 5, 5, 5, 5])

///////////
function maxSummArray2 (arr) {
    let maxSum = 0
    let sum = 0
    let lastItem = null
    arr.forEach((item) => {
      if (lastItem && item === lastItem + 1) {
        sum = sum > 0 ? sum + item : item + lastItem;
        lastItem = item;
        if (sum > maxSum) {
          maxSum = sum;
        }
      } else {
        lastItem = item;
      }
    });
    console.log(maxSum);
    return maxSum;
  }

  maxSummArray2([5, 5, 5, 5, 5, 1, 5, 5])