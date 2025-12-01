function missingNumber(arr) {
    const n = arr.length;
    let newMap = new Map();
    let missingNum = [];

    for (let i = 0; i < n; i++) {
        newMap.set(arr[i], true);
    }

    for (let i = 1; i <= n; i++) {
        if (!newMap.has(i)) {
            missingNum.push(i);
        }
    }
    return missingNum;
}

const arr = [3, 0, 1, 4, 2, 6];
console.log(missingNumber(arr, n));