function maxSummArray() {
    let arr = [5, -10, 5, -10, -5, 10,];
    let maxSumm = arr[0] + arr[1];
    let sum = arr[0] + arr[1];
    for (let i = 2; i < arr.length; i++) {
        if (maxSumm < sum + arr[i]) {
            maxSumm = sum + arr[i];
            sum = sum + arr[i];
        }
        else {
            sum = sum + arr[i];
        }
    }
    console.log(maxSumm);
}