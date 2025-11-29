function subArraySumToK(arr, k) {

    let count = 0;
    let n = arr.length;
    let prefixSum = 0;
    let prefixSumMap = new Map();

    for (let i = 0; i < n; i++) {
        prefixSum += arr[i];

        let complement = prefixSum - k;

        if (prefixSumMap.has(complement)) {
            count += prefixSumMap.get(complement);
        }

        prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
    }

    return count;

}

const arr = [1, 2, 3, 4, 5];
const k = 9;
console.log(subArraySumToK(arr, k));
