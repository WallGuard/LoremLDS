function maxSummArray(arr) {
    let maxSumm
    let sum
    if ((Number.isInteger(arr[0])) && (Number.isInteger(arr[1]))) {
        maxSumm = arr[0] + arr[1];
        sum = arr[0] + arr[1];
    }
    else {
        console.log('false')
        return false
    }

    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] ^ 0) !== arr[i]){
            console.log('false');
            return false;
        }
        else if (maxSumm < sum + arr[i]) {
            maxSumm = sum + arr[i];
            sum = sum + arr[i];
        }
        else {
            sum = sum + arr[i];
        }
    }
    console.log(maxSumm);
    return maxSumm;
}

maxSummArray([5, 5, 5, 5, 5, 5, 5, 5])